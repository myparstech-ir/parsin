export interface BusinessBasicInfo {
    id: string;
    name: string;
    legalName: string;
    businessType: string;
    activityField: string;
    nationalId: string;
    economicCode: string;
    registrationNumber: string;
    country: string;
    province: string;
    city: string;
    postalCode: string;
    phone: string;
    fax: string;
    address: string;
    website: string;
    email: string;
  }
  
  export interface BusinessAdvancedInfo {
    inventoryAccountingSystem: 'ادواری' | 'دایمی';
    inventoryEvaluationMethod: 'FIFO' | 'LIFO' | 'WeightedAverage';
    multiCurrency: boolean;
    warehouseSystem: boolean;
    mainCurrency: string;
    calendar: string;
    vatRate: number;
    fiscalYearStart: string;
    fiscalYearEnd: string;
    fiscalYearTitle: string;
  }
  
  export interface Business extends BusinessBasicInfo, BusinessAdvancedInfo {}