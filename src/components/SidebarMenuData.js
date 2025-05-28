import {
    DashboardOutlined,
    UserOutlined,
    DollarOutlined,
    ShopOutlined,
    BankOutlined,
    ShoppingCartOutlined,
    AppstoreOutlined,
    FileTextOutlined,
    SettingOutlined,
    BarChartOutlined,
    MoreOutlined,
  } from '@ant-design/icons';
  
  const SidebarMenuData = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'داشبورد',
      path: '/dashboard',
    },
    {
      key: 'people',
      icon: <UserOutlined />,
      label: 'اشخاص',
      children: [
        { key: 'new-person', label: 'شخص جدید', icon: <UserOutlined />, path: '/people/new' },
        { key: 'people-list', label: 'اشخاص', icon: <UserOutlined />, path: '/people' },
        { key: 'receive', label: 'دریافت', icon: <DollarOutlined />, path: '/people/receive' },
        { key: 'receive-list', label: 'لیست دریافت‌ها', icon: <DollarOutlined />, path: '/people/receive-list' },
        { key: 'payment', label: 'پرداخت', icon: <DollarOutlined />, path: '/people/payment' },
        { key: 'payment-list', label: 'لیست پرداخت‌ها', icon: <DollarOutlined />, path: '/people/payment-list' },
        { key: 'stakeholders', label: 'سهامداران', icon: <UserOutlined />, path: '/people/stakeholders' },
        { key: 'vendors', label: 'فروشندگان', icon: <UserOutlined />, path: '/people/vendors' },
      ]
    },
    {
      key: 'goods',
      icon: <ShopOutlined />,
      label: 'کالاها و خدمات',
      children: [
        { key: 'new-product', label: 'کالای جدید', icon: <ShopOutlined />, path: '/goods/new-product' },
        { key: 'new-service', label: 'خدمات جدید', icon: <ShopOutlined />, path: '/goods/new-service' },
        { key: 'goods-list', label: 'کالاها و خدمات', icon: <ShopOutlined />, path: '/goods' },
        { key: 'update-pricelist', label: 'به‌روزرسانی لیست قیمت', icon: <ShopOutlined />, path: '/goods/update-pricelist' },
        { key: 'print-barcode', label: 'چاپ بارکد', icon: <ShopOutlined />, path: '/goods/print-barcode' },
        { key: 'print-barcode-bulk', label: 'چاپ بارکد تعدادی', icon: <ShopOutlined />, path: '/goods/print-barcode-bulk' },
        { key: 'pricelist-page', label: 'صفحه لیست قیمت کالا', icon: <ShopOutlined />, path: '/goods/pricelist-page' },
      ]
    },
    {
      key: 'banking',
      icon: <BankOutlined />,
      label: 'بانکداری',
      children: [
        { key: 'banks', label: 'بانک‌ها', icon: <BankOutlined />, path: '/banking/banks' },
        { key: 'funds', label: 'صندوق‌ها', icon: <BankOutlined />, path: '/banking/funds' },
        { key: 'petty-cash', label: 'تنخواه‌گردان‌ها', icon: <BankOutlined />, path: '/banking/petty-cash' },
        { key: 'transfer', label: 'انتقال', icon: <BankOutlined />, path: '/banking/transfer' },
        { key: 'transfer-list', label: 'لیست انتقال‌ها', icon: <BankOutlined />, path: '/banking/transfer-list' },
        { key: 'received-cheques', label: 'لیست چک‌های دریافتی', icon: <BankOutlined />, path: '/banking/received-cheques' },
        { key: 'paid-cheques', label: 'لیست چک‌های پرداختی', icon: <BankOutlined />, path: '/banking/paid-cheques' },
      ]
    },
    {
      key: 'sales',
      icon: <ShoppingCartOutlined />,
      label: 'فروش و درآمد',
      children: [
        { key: 'new-sale', label: 'فروش جدید', icon: <ShoppingCartOutlined />, path: '/sales/new' },
        { key: 'quick-invoice', label: 'فاکتور سریع', icon: <ShoppingCartOutlined />, path: '/sales/quick-invoice' },
        { key: 'return-sale', label: 'برگشت از فروش', icon: <ShoppingCartOutlined />, path: '/sales/return-sale' },
        { key: 'sale-invoices', label: 'فاکتورهای فروش', icon: <ShoppingCartOutlined />, path: '/sales/invoices' },
        { key: 'return-invoices', label: 'فاکتورهای برگشت از فروش', icon: <ShoppingCartOutlined />, path: '/sales/return-invoices' },
        { key: 'income', label: 'درآمد', icon: <DollarOutlined />, path: '/sales/income' },
        { key: 'income-list', label: 'لیست درآمدها', icon: <DollarOutlined />, path: '/sales/income-list' },
        { key: 'installment-contract', label: 'قرارداد فروش اقساطی', icon: <ShoppingCartOutlined />, path: '/sales/installment-contract' },
        { key: 'installment-list', label: 'لیست فروش اقساطی', icon: <ShoppingCartOutlined />, path: '/sales/installment-list' },
        { key: 'discount-items', label: 'اقلام تخفیف‌دار', icon: <ShoppingCartOutlined />, path: '/sales/discount-items' },
      ]
    },
    {
      key: 'purchase',
      icon: <ShoppingCartOutlined />,
      label: 'خرید و هزینه',
      children: [
        { key: 'new-purchase', label: 'خرید جدید', icon: <ShoppingCartOutlined />, path: '/purchase/new' },
        { key: 'return-purchase', label: 'برگشت از خرید', icon: <ShoppingCartOutlined />, path: '/purchase/return-purchase' },
        { key: 'purchase-invoices', label: 'فاکتورهای خرید', icon: <ShoppingCartOutlined />, path: '/purchase/invoices' },
        { key: 'return-purchase-invoices', label: 'فاکتورهای برگشت از خرید', icon: <ShoppingCartOutlined />, path: '/purchase/return-invoices' },
        { key: 'expense', label: 'هزینه', icon: <DollarOutlined />, path: '/purchase/expense' },
        { key: 'expense-list', label: 'لیست هزینه‌ها', icon: <DollarOutlined />, path: '/purchase/expense-list' },
        { key: 'waste', label: 'ضایعات', icon: <ShoppingCartOutlined />, path: '/purchase/waste' },
        { key: 'waste-list', label: 'لیست ضایعات', icon: <ShoppingCartOutlined />, path: '/purchase/waste-list' },
      ]
    },
    {
      key: 'warehouse',
      icon: <AppstoreOutlined />,
      label: 'انبارداری',
      children: [
        { key: 'warehouses', label: 'انبارها', icon: <AppstoreOutlined />, path: '/warehouse/warehouses' },
        { key: 'new-delivery', label: 'حواله جدید', icon: <AppstoreOutlined />, path: '/warehouse/new-delivery' },
        { key: 'receipts', label: 'رسید و حواله‌های انبار', icon: <AppstoreOutlined />, path: '/warehouse/receipts' },
        { key: 'product-inventory', label: 'موجودی کالا', icon: <AppstoreOutlined />, path: '/warehouse/product-inventory' },
        { key: 'all-inventories', label: 'موجودی تمامی انبارها', icon: <AppstoreOutlined />, path: '/warehouse/all-inventories' },
        { key: 'inventory-audit', label: 'انبارگردانی', icon: <AppstoreOutlined />, path: '/warehouse/inventory-audit' },
      ]
    },
    {
      key: 'accounting',
      icon: <FileTextOutlined />,
      label: 'حسابداری',
      children: [
        { key: 'new-doc', label: 'سند جدید', icon: <FileTextOutlined />, path: '/accounting/new-doc' },
        { key: 'docs-list', label: 'لیست اسناد', icon: <FileTextOutlined />, path: '/accounting/docs-list' },
        { key: 'opening-balance', label: 'تراز افتتاحیه', icon: <FileTextOutlined />, path: '/accounting/opening-balance' },
        { key: 'close-fiscal-year', label: 'بستن سال مالی', icon: <FileTextOutlined />, path: '/accounting/close-fiscal-year' },
        { key: 'accounts-table', label: 'جدول حساب‌ها', icon: <FileTextOutlined />, path: '/accounting/accounts-table' },
        { key: 'docs-aggregation', label: 'تجمیع اسناد', icon: <FileTextOutlined />, path: '/accounting/docs-aggregation' },
      ]
    },
    {
      key: 'other',
      icon: <MoreOutlined />,
      label: 'سایر',
      children: [
        { key: 'archive', label: 'آرشیو', icon: <MoreOutlined />, path: '/other/archive' },
        { key: 'sms-panel', label: 'پنل پیامک', icon: <MoreOutlined />, path: '/other/sms-panel' },
        { key: 'inquiry', label: 'استعلام', icon: <MoreOutlined />, path: '/other/inquiry' },
        { key: 'other-receive', label: 'دریافت سایر', icon: <MoreOutlined />, path: '/other/other-receive' },
        { key: 'other-receive-list', label: 'لیست دریافت‌ها', icon: <MoreOutlined />, path: '/other/other-receive-list' },
        { key: 'other-payment', label: 'پرداخت سایر', icon: <MoreOutlined />, path: '/other/other-payment' },
        { key: 'other-payment-list', label: 'لیست پرداخت‌ها', icon: <MoreOutlined />, path: '/other/other-payment-list' },
        { key: 'currency-revaluation', label: 'سند تسعیر ارز', icon: <MoreOutlined />, path: '/other/currency-revaluation' },
        { key: 'balance-persons', label: 'سند توازن اشخاص', icon: <MoreOutlined />, path: '/other/balance-persons' },
        { key: 'balance-products', label: 'سند توازن کالاها', icon: <MoreOutlined />, path: '/other/balance-products' },
        { key: 'salary-doc', label: 'سند حقوق', icon: <MoreOutlined />, path: '/other/salary-doc' },
      ]
    },
    {
      key: 'reports',
      icon: <BarChartOutlined />,
      label: 'گزارش‌ها',
      children: [
        { key: 'all-reports', label: 'تمام گزارش‌ها', icon: <BarChartOutlined />, path: '/reports/all' },
        { key: 'balance-sheet', label: 'ترازنامه', icon: <BarChartOutlined />, path: '/reports/balance-sheet' },
        { key: 'profit-loss', label: 'صورت سود و زیان', icon: <BarChartOutlined />, path: '/reports/profit-loss' },
        { key: 'capital-statement', label: 'صورتحساب سرمایه', icon: <BarChartOutlined />, path: '/reports/capital-statement' },
        { key: 'journal', label: 'دفتر روزنامه', icon: <BarChartOutlined />, path: '/reports/journal' },
        { key: 'accounts-ledger', label: 'دفتر حساب‌ها', icon: <BarChartOutlined />, path: '/reports/accounts-ledger' },
        { key: 'general-ledger', label: 'دفتر کل', icon: <BarChartOutlined />, path: '/reports/general-ledger' },
        { key: 'trial-balance', label: 'تراز آزمایشی', icon: <BarChartOutlined />, path: '/reports/trial-balance' },
        { key: 'accounts-review', label: 'مرور حساب‌ها', icon: <BarChartOutlined />, path: '/reports/accounts-review' },
        { key: 'detail-accounts-review', label: 'مرور حساب‌های تفصیل', icon: <BarChartOutlined />, path: '/reports/detail-accounts-review' },
        { key: 'journal-aggregated', label: 'دفتر روزنامه (تجمیعی)', icon: <BarChartOutlined />, path: '/reports/journal-aggregated' },
        { key: 'ledger-aggregated', label: 'دفتر کل (تجمیعی)', icon: <BarChartOutlined />, path: '/reports/ledger-aggregated' },
        { key: 'debtors-creditors', label: 'بدهکاران و بستانکاران', icon: <BarChartOutlined />, path: '/reports/debtors-creditors' },
        { key: 'persons-cards', label: 'کارت حساب اشخاص', icon: <BarChartOutlined />, path: '/reports/persons-cards' },
        { key: 'sales-by-product', label: 'فروش به تفکیک کالا', icon: <BarChartOutlined />, path: '/reports/sales-by-product' },
        { key: 'purchase-by-product', label: 'خرید به تفکیک کالا', icon: <BarChartOutlined />, path: '/reports/purchase-by-product' },
        { key: 'sales-by-invoice', label: 'فروش به تفکیک فاکتور', icon: <BarChartOutlined />, path: '/reports/sales-by-invoice' },
        { key: 'purchase-by-invoice', label: 'خرید به تفکیک فاکتور', icon: <BarChartOutlined />, path: '/reports/purchase-by-invoice' },
        { key: 'tax-report', label: 'گزارش مالیات', icon: <BarChartOutlined />, path: '/reports/tax-report' },
        { key: 'invoice-profit', label: 'سود فاکتور', icon: <BarChartOutlined />, path: '/reports/invoice-profit' },
      ]
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'تنظیمات',
      children: [
        { key: 'projects', label: 'پروژه‌ها', icon: <SettingOutlined />, path: '/settings/projects' },
        { key: 'business-info', label: 'اطلاعات کسب و کار', icon: <SettingOutlined />, path: '/settings/business-info' },
        { key: 'financial-settings', label: 'تنظیمات مالی', icon: <SettingOutlined />, path: '/settings/financial-settings' },
        { key: 'currency-rates', label: 'جدول تبدیل نرخ ارز', icon: <SettingOutlined />, path: '/settings/currency-rates' },
        { key: 'user-management', label: 'مدیریت کاربران', icon: <SettingOutlined />, path: '/settings/user-management' },
        { key: 'print-settings', label: 'تنظیمات چاپ', icon: <SettingOutlined />, path: '/settings/print-settings' },
        { key: 'form-builder', label: 'فرم ساز', icon: <SettingOutlined />, path: '/settings/form-builder' },
        { key: 'notifications', label: 'اعلانات', icon: <SettingOutlined />, path: '/settings/notifications' },
      ]
    }
  ];
  
  export default SidebarMenuData;