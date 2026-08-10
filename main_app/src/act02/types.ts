export type ScreenId =
  | 'EverythingYouNeed'
  | 'VendorFilters'
  | 'SearchResults'
  | 'SavedVendors'
  | 'VendorProfile'
  | 'Portfolio'
  | 'Reviews'
  | 'Availability'
  | 'CompareVendors'
  | 'VenueProfile'
  | 'PurohitProfile'
  | 'Attire'
  | 'VendorSwap'
  | 'SwapImpact'
  | 'ReturnGifts';

export interface ScreenMeta {
  id: ScreenId;
  title: string;
  pdfPage: number;
  description: string;
}

export const SCREEN_SEQUENCE: ScreenMeta[] = [
  { id: 'EverythingYouNeed', title: "Everything you'll need", pdfPage: 1, description: 'Category Directory & Search Home' },
  { id: 'VendorFilters', title: 'Filters', pdfPage: 1, description: 'Comprehensive Vendor Filters Modal' },
  { id: 'SearchResults', title: '9 caterers', pdfPage: 2, description: 'Catering Search Results & Pricing' },
  { id: 'SavedVendors', title: 'Saved', pdfPage: 2, description: 'Shared Shortlists & Family Voting' },
  { id: 'VendorProfile', title: 'Vendor Profile', pdfPage: 3, description: 'Sri Amirtham Catering Detailed Overview' },
  { id: 'Portfolio', title: 'Portfolio', pdfPage: 3, description: 'Media Gallery & Shot Verification' },
  { id: 'Reviews', title: 'Reviews', pdfPage: 3, description: 'NRI Verified Reviews & Breakdown' },
  { id: 'Availability', title: 'Availability', pdfPage: 4, description: 'Venue Calendar & Free Hold Request' },
  { id: 'CompareVendors', title: 'Compare Vendors', pdfPage: 4, description: 'Side-by-side Shortlist Comparison' },
  { id: 'VenueProfile', title: 'Venue Profile', pdfPage: 5, description: 'Sri Sathyanarayana Mandapam Details' },
  { id: 'PurohitProfile', title: 'Purohit Profile', pdfPage: 5, description: 'Sri Venkatesa Sastrigal Services' },
  { id: 'Attire', title: 'Kanchipuram silk', pdfPage: 5, description: 'Bridal Silk & Jewellery Buy/Rent' },
  { id: 'VendorSwap', title: 'Catering', pdfPage: 6, description: 'Vendor Swap Slot Selection' },
  { id: 'SwapImpact', title: 'Swap made', pdfPage: 6, description: 'Budget & Schedule Impact Analysis' },
];
