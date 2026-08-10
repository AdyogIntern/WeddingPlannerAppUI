/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
// Removed MobileFrame
import { BottomTabBar, ScreenId } from './components/Navigation/BottomTabBar';
import { Screen25_BudgetDashboard } from './screens/BudgetDashboard';
import { Screen26_PaymentSchedule } from './screens/PaymentSchedule';
import { Screen27_EscrowProtection } from './screens/EscrowProtection';
import { Screen28_WhoPaysWhat } from './screens/WhoPaysWhat';
import { Screen29_PaperworkRemittance } from './screens/PaperworkRemittance';
import { Screen30_BookingConfirmation } from './screens/BookingConfirmation';

import {
  INITIAL_BUDGET_ITEMS,
  INITIAL_PAYMENT_SCHEDULE,
  INITIAL_ESCROW_ITEMS,
  INITIAL_DISPUTE_CASE,
  INITIAL_CONTRIBUTORS,
  INITIAL_DOCUMENTS,
  INITIAL_BOOKING_DETAILS
} from './data/mockData';

import { PaymentModal } from './components/Modals/PaymentModal';
import { DocumentViewerModal } from './components/Modals/DocumentViewerModal';
import { SendToFamilyModal } from './components/Modals/SendToFamilyModal';
import { DocumentItem, PaymentScheduleItem } from './types';

export default function App() {
  const [screenHistory, setScreenHistory] = useState<ScreenId[]>(['screen25']);
  const activeScreen = screenHistory[screenHistory.length - 1] || 'screen25';
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const navigateTo = (screen: ScreenId) => {
    if (activeScreen !== screen) {
      setScreenHistory((prev) => [...prev, screen]);
    }
  };

  const handleBack = () => {
    setScreenHistory((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, prev.length - 1);
      }
      return ['screen25'];
    });
  };

  const handleSelectTab = (screen: ScreenId) => {
    if (screen === 'screen25') {
      setScreenHistory(['screen25']);
    } else if (screen !== activeScreen) {
      setScreenHistory((prev) => [...prev, screen]);
    }
  };

  // App Data State
  const [budgetItems] = useState(INITIAL_BUDGET_ITEMS);
  const [scheduleItems] = useState(INITIAL_PAYMENT_SCHEDULE);
  const [escrowItems, setEscrowItems] = useState(INITIAL_ESCROW_ITEMS);
  const [disputeCase] = useState(INITIAL_DISPUTE_CASE);
  const [contributors] = useState(INITIAL_CONTRIBUTORS);
  const [documents] = useState(INITIAL_DOCUMENTS);
  const [bookingDetails] = useState(INITIAL_BOOKING_DETAILS);

  // Modal States
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPaymentItem, setSelectedPaymentItem] = useState<{
    vendor: string;
    amountINR: string;
    amountUSD: string;
  }>({
    vendor: 'Leela Palace',
    amountINR: '₹4,50,000',
    amountUSD: '$5,360'
  });

  const [docModalOpen, setDocModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; details: string }>({
    title: 'GST invoice · Sri Amirtham',
    details: '₹1.58L · 5% GST · 14 Sep'
  });

  const [familyModalOpen, setFamilyModalOpen] = useState(false);
  const [familyRecipient, setFamilyRecipient] = useState('Appa');

  // Toggle Currency
  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  // Open Payment Modal
  const handleOpenPayment = (item?: PaymentScheduleItem) => {
    if (item) {
      setSelectedPaymentItem({
        vendor: item.vendor,
        amountINR: `₹${item.amountINR.toLocaleString('en-IN')}`,
        amountUSD: `$${item.amountUSD.toLocaleString()}`
      });
    } else {
      setSelectedPaymentItem({
        vendor: 'Leela Palace',
        amountINR: '₹4,50,000',
        amountUSD: '$5,360'
      });
    }
    setPaymentModalOpen(true);
  };

  // Open Dispute screen
  const handleRaiseDispute = (vendor: string, amount: string) => {
    // No-op; the EscrowProtection screen handles its own dispute tab display.
  };

  // Open Document Modal
  const handlePreviewDoc = (title: string, details: string) => {
    setSelectedDoc({ title, details });
    setDocModalOpen(true);
  };

  const handleDownloadDoc = (title: string, details: string) => {
    const fileName = `${title.replace(/\s+/g, '_')}.txt`;
    const fileContent = `Document: ${title}\nDetails: ${details}\n\nThis is a downloadable copy of the document from the Vivaha app.`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  // Open Send To Family Modal
  const handleSendToFamily = (recipient: string) => {
    setFamilyRecipient(recipient);
    setFamilyModalOpen(true);
  };

  const handleReleaseEscrow = (id: string) => {
    setEscrowItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: 'released' as const } : item
      )
    );
  };

  return (
    <div className="w-full h-full relative flex flex-col bg-[#F9F7F3] font-sans text-gray-900">
      {/* Screen Renderer */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex-1">
          {activeScreen === 'screen25' && (
            <Screen25_BudgetDashboard
              budgetItems={budgetItems}
              onNavigateToSchedule={() => navigateTo('screen26')}
              onNavigateToWhoPays={() => navigateTo('screen28')}
              onPayEscrow={() => handleOpenPayment()}
              currency={currency}
              onToggleCurrency={handleToggleCurrency}
              onBack={handleBack}
            />
          )}

          {activeScreen === 'screen26' && (
            <Screen26_PaymentSchedule
              scheduleItems={scheduleItems}
              onOpenPaymentModal={handleOpenPayment}
              onNavigateToEscrow={() => navigateTo('screen27')}
              currency={currency}
              onToggleCurrency={handleToggleCurrency}
              onBack={handleBack}
            />
          )}

          {activeScreen === 'screen27' && (
            <Screen27_EscrowProtection
              escrowItems={escrowItems}
              disputeCase={disputeCase}
              onRaiseDispute={handleRaiseDispute}
              onReleaseEscrow={handleReleaseEscrow}
              onViewTransactionDetails={() => navigateTo('screen30')}
              currency={currency}
              onToggleCurrency={handleToggleCurrency}
              onBack={handleBack}
            />
          )}

          {activeScreen === 'screen28' && (
            <Screen28_WhoPaysWhat
              contributors={contributors}
              onSendToAppa={() => handleSendToFamily('Appa')}
              currency={currency}
              onToggleCurrency={handleToggleCurrency}
              onBack={handleBack}
            />
          )}

          {activeScreen === 'screen29' && (
            <Screen29_PaperworkRemittance
              documents={documents}
              onPreviewDoc={(doc: DocumentItem) => handlePreviewDoc(doc.title, doc.details)}
              onDownloadDoc={(doc: DocumentItem) => handleDownloadDoc(doc.title, doc.details)}
              currency={currency}
              onToggleCurrency={handleToggleCurrency}
              onBack={handleBack}
            />
          )}
 
          {activeScreen === 'screen30' && (
            <Screen30_BookingConfirmation
              bookingDetails={bookingDetails}
              onSendToFamily={handleSendToFamily}
              onPreviewDoc={handlePreviewDoc}
              onDownloadDoc={handleDownloadDoc}
              currency={currency}
              onToggleCurrency={handleToggleCurrency}
              onBack={handleBack}
            />
          )}
        </div>

        {/* Sticky Bottom Navigation Bar */}
        <BottomTabBar activeScreen={activeScreen} onSelectScreen={handleSelectTab} />
      </div>

      {/* Interactive Modals */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        onSuccess={() => {
          setPaymentModalOpen(false);
          navigateTo('screen27');
        }}
        vendorName={selectedPaymentItem.vendor}
        amountINR={selectedPaymentItem.amountINR}
        amountUSD={selectedPaymentItem.amountUSD}
      />

      <DocumentViewerModal
        isOpen={docModalOpen}
        onClose={() => setDocModalOpen(false)}
        onDownload={() => handleDownloadDoc(selectedDoc.title, selectedDoc.details)}
        title={selectedDoc.title}
        details={selectedDoc.details}
      />

      <SendToFamilyModal
        isOpen={familyModalOpen}
        onClose={() => setFamilyModalOpen(false)}
        defaultRecipient={familyRecipient}
      />
    </div>
  );
}
