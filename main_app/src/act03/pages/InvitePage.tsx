import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Tag } from '../components/Tag';

interface RoleOption {
  id: string;
  title: string;
  description: string;
}

const ROLES: RoleOption[] = [
  {
    id: 'co_owner',
    title: 'Co-owner',
    description: 'Everything except deleting the wedding',
  },
  {
    id: 'decision_maker',
    title: 'Decision-maker',
    description: 'Approves spend in the categories he owns',
  },
  {
    id: 'contributor',
    title: 'Contributor',
    description: 'Shortlist, comment, vote, finish tasks',
  },
  {
    id: 'viewer',
    title: 'Viewer',
    description: 'Reads and reacts. No app needed.',
  },
];

const AMOUNTS = ['₹1L', '₹2L', '₹5L', 'Any'];

export const InvitePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [categories, setCategories] = useState<string[]>(['Venue', 'Catering', 'Purohit']);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const handleSendInvite = () => {
    navigate('/act3/family');
  };

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div>
      <Header title="Invite Appa" />

      <main className="p-5 space-y-5 pb-8">
        {/* Mobile Input Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#E5E1D8] shadow-2xs">
          <div className="text-[10px] tracking-wider text-[#867A6E] font-semibold uppercase mb-1">
            MOBILE
          </div>
          <div className="text-[16px] font-semibold text-[#2C2420] tracking-wide">
            +91 98410 •• ••32
          </div>
        </div>

        {/* Section 1: What can he do? */}
        <div>
          <h2 className="text-[17px] font-medium text-[#2C2420] mb-2.5">
            What can he do?
          </h2>
          <div className="space-y-2.5">
            {ROLES.map((role) => {
              const isSelected = selectedRole === role.id;
              return (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`bg-white rounded-2xl p-4 transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-2 border-[#7B1D21] shadow-2xs'
                      : 'border border-[#E5E1D8] hover:border-[#7B1D21]/40'
                  }`}
                >
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#2C2420]">
                      {role.title}
                    </h3>
                    <p className="text-[12px] text-[#867A6E] mt-0.5">
                      {role.description}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#7B1D21] flex-shrink-0 ml-3" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: He'll own */}
        <div>
          <h2 className="text-[17px] font-medium text-[#2C2420] mb-2.5">
            He'll own
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Tag
                key={cat}
                label={cat}
                active={selectedCategories.includes(cat)}
                onClick={() => toggleCategory(cat)}
              />
            ))}
            {isAddingCategory ? (
              <input
                autoFocus
                type="text"
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
                      setCategories([...categories, newCategory.trim()]);
                      setSelectedCategories([...selectedCategories, newCategory.trim()]);
                    }
                    setIsAddingCategory(false);
                    setNewCategory('');
                  }
                }}
                onBlur={() => {
                  if (newCategory.trim() && !categories.includes(newCategory.trim())) {
                    setCategories([...categories, newCategory.trim()]);
                  }
                  setIsAddingCategory(false);
                  setNewCategory('');
                }}
                className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium bg-white border border-[#7B1D21] text-[#2C2420] outline-none w-24 shadow-2xs"
                placeholder="Name..."
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsAddingCategory(true)}
                className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium bg-white border border-[#E5E1D8] text-[#2C2420] hover:bg-[#FDFCF0] transition-colors cursor-pointer"
              >
                + add
              </button>
            )}
          </div>
        </div>

        {/* Section 3: Approval needed above */}
        <div>
          <h2 className="text-[17px] font-medium text-[#2C2420] mb-2.5">
            Approval needed above
          </h2>
          <div className="flex gap-2">
            {AMOUNTS.map((amt) => {
              const isSelected = selectedAmount === amt;
              return (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setSelectedAmount(amt)}
                  className={`flex-1 py-2 px-3 rounded-xl text-[13px] font-semibold transition-colors ${
                    isSelected
                      ? 'bg-[#7B1D21] text-white'
                      : 'bg-white border border-[#E5E1D8] text-[#2C2420] hover:bg-[#FDFCF0]'
                  }`}
                >
                  {amt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#FDF1F1] p-4 rounded-xl text-[#7C6E63] text-[13px] leading-relaxed">
          He'll get a WhatsApp with a link. He can approve, comment and vote from the browser — installing the app is optional, forever.
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-2">
          <Button onClick={handleSendInvite}>
            Send invite on WhatsApp
          </Button>
        </div>
      </main>
    </div>
  );
};
