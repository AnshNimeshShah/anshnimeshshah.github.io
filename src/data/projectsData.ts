export interface ProjectDetail {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Equity Research & Valuation' | 'Investment & Portfolio Analysis' | 'Markets & Risk' | 'Banking & Analytics' | 'Ethics & Governance' | 'Macroeconomics & Sustainable Finance';
  label?: string; // e.g. 'Academic Group Project', 'Academic Project - Fixed Income', 'Flagship Platform'
  shortDescription: string;
  tags: string[];
  liveUrl?: string;
  pdfUrl?: string;
  excelUrl?: string;
  featured: boolean;
  problemObjective: string;
  whatIAnalysedBuilt: string;
  methodsTools: string;
  keyTakeaway: string;
  evidenceFilesLinks: {
    label: string;
    type: 'live' | 'pdf' | 'excel' | 'doc';
    url?: string;
    filename?: string;
  }[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const FEATURED_PROJECTS: ProjectDetail[] = [
  {
    id: 'meredian',
    title: 'Meredian – AI-Assisted Equity Research Platform',
    subtitle: 'Web-Based Fundamental Research & Valuation Workspace',
    category: 'Equity Research & Valuation',
    label: 'Flagship Platform',
    shortDescription: 'A web-based equity research workspace designed to bring company research, financial metrics, valuation workflows, reports, and an AI research assistant into one place.',
    tags: ['Equity Research', 'Valuation', 'Financial Modelling', 'AI Tools', 'Web Platform'],
    liveUrl: 'https://meredian-equityanalyzer.lovable.app',
    featured: true,
    problemObjective: 'Fundamental equity analysis typically requires navigating disparate data sources, static annual report PDFs, and isolated valuation spreadsheets, slowing down investment memo preparation and thesis synthesis.',
    whatIAnalysedBuilt: 'Defined the product concept, finance logic, architecture, feature decisions, workflow design, testing, validation, iteration, and deployment direction. Built capabilities for company and financial statement analysis, structured reports, annual-report query support, sensitivity/scenario thinking, and an integrated AI research assistant. AI-assisted tools were utilized for implementation.',
    methodsTools: 'Product Architecture, Financial Valuation Logic, Scenario Modelling, Workflow Design, AI-Assisted Development Tools (React, Vite, Tailwind CSS).',
    keyTakeaway: 'Integrating structured financial statement analysis, dynamic valuation parameters, and context-grounded AI research in a single interface significantly streamlines preliminary company screening and fundamental investment review.',
    evidenceFilesLinks: [
      { label: 'Live Demo Platform', type: 'live', url: 'https://meredian-equityanalyzer.lovable.app' }
    ],
    metrics: [
      { label: 'IMPLEMENTATION', value: 'AI-Assisted Build' },
      { label: 'CORE SPECIALTY', value: 'Fundamental Research' },
      { label: 'WORKFLOW ENGINE', value: 'Valuation & Synthesis' }
    ]
  },
  {
    id: 'infosys',
    title: 'Infosys Ltd. – Financial Model & Three-Statement DCF Valuation',
    subtitle: 'Integrated Three-Statement DCF Model & Sensitivity Analysis',
    category: 'Equity Research & Valuation',
    label: 'Financial Modelling & Valuation',
    shortDescription: 'Integrated three-statement DCF valuation model and sensitivity matrix for Infosys Ltd., testing 6–10% revenue growth, 10% WACC, and 4% terminal growth.',
    tags: ['DCF', 'Financial Modelling', 'Excel', 'Valuation', 'Equity Research'],
    featured: true,
    problemObjective: 'Estimating the intrinsic valuation of Infosys Ltd. using an integrated three-statement financial model and DCF framework to evaluate share price against current market spot pricing.',
    whatIAnalysedBuilt: 'Built an integrated three-statement financial model linking income statement, balance sheet, and cash flow schedules. Projected financial performance across scenario and sensitivity analyses, modeling 6–10% revenue growth, 10% WACC, and 4% terminal growth. Calculated an estimated intrinsic value of ₹1,319 per share versus market price of ₹1,297 (~1.7% variance parameter) with a fair value range of ₹1,200–₹1,500.',
    methodsTools: 'Microsoft Excel (linked multi-sheet financial model, formula-driven projections, scenario & sensitivity analysis), DCF Valuation, Three-Statement Financial Modelling.',
    keyTakeaway: 'Intrinsic valuation is highly sensitive to capital discount rates (WACC) and terminal growth assumptions; comprehensive sensitivity analysis across 6–10% growth and 10% WACC establishes a defensible ₹1,200–₹1,500 fair value range.',
    evidenceFilesLinks: [
      { label: 'Financial Model Documentation & Valuation Schedules', type: 'doc' }
    ],
    metrics: [
      { label: 'INTRINSIC VALUE', value: '₹1,319 per share' },
      { label: 'MARKET SPOT PRICE', value: '₹1,297 (~1.7% variance)' },
      { label: 'FAIR VALUE RANGE', value: '₹1,200 – ₹1,500' }
    ]
  },
  {
    id: 'wipro',
    title: 'Wipro Ltd. – Financial Statement Analysis & Investment Memo',
    subtitle: 'FY22–FY24 Financial Statement Analysis, DuPont Decomposition & Peer Benchmarking',
    category: 'Equity Research & Valuation',
    label: 'Financial Statement Analysis',
    shortDescription: 'A FY22–FY24 financial analysis of Wipro using ratios, DuPont decomposition, trend analysis, peer benchmarking against TCS, Infosys, and HCLTech, and an investment memo.',
    tags: ['Financial Statement Analysis', 'DuPont', 'Ratio Analysis', 'Peer Benchmarking', 'Investment Memo'],
    featured: true,
    problemObjective: 'Evaluating whether Wipro Ltd.\'s operational profile and return on equity (ROE) demonstrate sustainable fundamental quality or rely on external leverage, comparing its competitive stance against Indian IT peers.',
    whatIAnalysedBuilt: 'Conducted a comprehensive FY22–FY24 financial statement analysis of Wipro Ltd. utilizing financial ratios, DuPont decomposition, trend analysis, and peer benchmarking against TCS, Infosys, and HCLTech. Analysed profitability, liquidity, leverage, efficiency, and shareholder-return drivers. Formulated an investment memo establishing a Hold recommendation.',
    methodsTools: 'DuPont Three-Stage Analysis, Financial Ratio Analysis, Common-Size Trend Statements, Peer Benchmarking (TCS, Infosys, HCLTech), Investment Memo.',
    keyTakeaway: 'Formulated a Hold investment recommendation: while Wipro maintains strong financial stability, conservative debt leverage, and healthy liquidity buffers, weaker operating profitability conversion and lagging top-line momentum relative to peers limit shareholder return expansion.',
    evidenceFilesLinks: [
      { label: 'Financial Analysis Workbook & Investment Memo Documentation', type: 'doc' }
    ],
    metrics: [
      { label: 'INVESTMENT VIEW', value: 'Hold Recommendation' },
      { label: 'PERIOD ANALYSED', value: 'FY22 – FY24' },
      { label: 'PEER BENCHMARK', value: 'TCS, Infosys, HCLTech' }
    ]
  },
  {
    id: 'portfolio-analytics',
    title: 'Indian Equity Portfolio Analytics Dashboard',
    subtitle: '15-Stock Indian Equities Tracker with NIFTY 50 Benchmarking',
    category: 'Investment & Portfolio Analysis',
    label: 'Portfolio Analytics & Risk',
    shortDescription: 'Formula-driven Excel portfolio dashboard for a 15-stock Indian equity portfolio with NIFTY 50 benchmarking.',
    tags: ['Portfolio Analytics', 'Excel', 'Financial Modelling', 'Risk Management'],
    featured: true,
    problemObjective: 'Monitoring capital allocation, risk-adjusted performance, sector concentration, and benchmark-relative returns across a diversified portfolio of Indian equities.',
    whatIAnalysedBuilt: 'Constructed an integrated Excel dashboard tracking 15 Indian equities across Technology, Financials, Energy, Consumer Goods, and Healthcare. Implemented formula-driven monthly price tracking, P&L calculations, individual and portfolio holding returns, sector weighting distributions, and benchmark-relative comparisons against the NIFTY 50 index. Built all spreadsheet logic, calculations, and Excel modelling; AI was used only to improve visual formatting and presentation aesthetics.',
    methodsTools: 'Microsoft Excel (portfolio return formulas, CAGR, sector allocation matrices, formula-driven tables), AI Tools (visual formatting only).',
    keyTakeaway: 'Rigorous sector weighting and benchmark-relative tracking clearly isolate sources of performance, demonstrating how deliberate sector allocation and position sizing impact overall portfolio volatility.',
    evidenceFilesLinks: [
      { label: 'Portfolio Analytics Workbook Documentation', type: 'doc' }
    ],
    metrics: [
      { label: 'HOLDINGS COUNT', value: '15 Indian Equities' },
      { label: 'BENCHMARK', value: 'NIFTY 50 Index' },
      { label: 'MODELLING ENGINE', value: 'Formula-Driven Excel' }
    ]
  },
  {
    id: 'behavioural-finance',
    title: 'A Longitudinal Study of Behavioural Biases Influencing Investment Decisions Among Young Indian Investors',
    subtitle: 'Longitudinal Qualitative Fieldwork & Thematic Analysis',
    category: 'Investment & Portfolio Analysis',
    label: 'Academic Group Research Project',
    shortDescription: 'A longitudinal behavioural-finance research project examining how investor biases change with experience.',
    tags: ['Behavioural Finance', 'Equity Research', 'Risk Management'],
    featured: true,
    problemObjective: 'Investigating how cognitive heuristics and behavioural biases influence decision-making among emerging Indian retail investors, and examining how bias intensity evolves as investors gain market experience.',
    whatIAnalysedBuilt: 'Collaborated on an academic group research initiative including behavioural finance literature review, longitudinal research framing, qualitative fieldwork through semi-structured interviews across retail investors and market practitioners, thematic analysis, and comparison across investor experience levels. Focused on five core biases: overconfidence, herding, loss aversion, anchoring, and confirmation bias.',
    methodsTools: 'Qualitative Field Interviews, Thematic Coding Analysis, Behavioural Finance Theory, Cross-Experience Cohort Synthesis.',
    keyTakeaway: 'Novice investors exhibit pronounced herding and loss aversion amplified by social trading channels, whereas experienced practitioners demonstrate higher self-awareness and rely on structured risk routines to curb emotional reactions.',
    evidenceFilesLinks: [
      { label: 'Research Documentation & Fieldwork Notes', type: 'doc' }
    ],
    metrics: [
      { label: 'RESEARCH TYPE', value: 'Qualitative Fieldwork' },
      { label: 'CORE BIASES', value: 'Overconfidence, Herding, Loss Aversion, Anchoring, Confirmation' },
      { label: 'PROJECT SCOPE', value: 'Academic Group Research Project' }
    ]
  },
  {
    id: 'monaco-fixed-income',
    title: 'Bond Valuation, Yield Spread and Fixed-Income Risk Assessment: Monaco / Eurozone Context',
    subtitle: 'Sovereign & Eurozone Debt Integration, Yield Curves & Risk Metrics',
    category: 'Markets & Risk',
    label: 'Academic Project - Fixed Income',
    shortDescription: 'Country-focused fixed-income analysis covering Euro-linked bond markets, pricing, yield curves, and risk.',
    tags: ['Fixed Income', 'Risk Management', 'Financial Modelling'],
    featured: true,
    problemObjective: 'Analyzing fixed-income mechanisms, interest rate sensitivities, and debt market integration for a specialized European jurisdiction tied to the Eurozone monetary system.',
    whatIAnalysedBuilt: 'Conducted a detailed fixed-income study evaluating bond pricing, yield curves, duration, convexity, credit risk, sovereign and high-grade corporate debt, and Eurozone monetary integration. Evaluated securitized debt instruments including Asset-Backed Securities (ABS), Mortgage-Backed Securities (MBS), and covered bonds.',
    methodsTools: 'Bond Cash Flow Valuation Frameworks, Yield Curve Analysis, Macaulay & Modified Duration, Convexity Metrics, Securitization Evaluation.',
    keyTakeaway: 'In pegged and monetary-union frameworks, fixed-income yields and refinancing risks are inextricably tied to ECB benchmark monetary policies, necessitating rigorous duration matching and credit-spread surveillance.',
    evidenceFilesLinks: [
      { label: 'Fixed Income Analysis & Yield Study', type: 'doc' }
    ],
    metrics: [
      { label: 'MARKET CONTEXT', value: 'Eurozone Fixed-Income Ecosystem' },
      { label: 'RISK METRICS', value: 'Duration, Convexity, Credit Spreads' },
      { label: 'INSTRUMENTS', value: 'Sovereign, ABS, MBS, Covered Bonds' }
    ]
  },
  {
    id: 'derivatives-real-world',
    title: 'Derivatives in the Real World',
    subtitle: 'Empirical Hedging Applications Across Currency, Rates, Commodities & Equity',
    category: 'Markets & Risk',
    label: 'Academic Group Project',
    shortDescription: 'Real-world derivative applications across currency, rates, commodities, credit, and equity.',
    tags: ['Derivatives', 'Risk Management', 'Financial Modelling'],
    featured: true,
    problemObjective: 'Examining how derivatives can be used to manage currency, interest-rate, commodity, credit, and equity-market risk through real-world corporate and market examples.',
    whatIAnalysedBuilt: 'Collaborated on an academic group project examining practical derivative hedging applications: currency futures (mitigating USD revenue volatility for TCS), interest-rate swaps (managing debt costs for Reliance Industries), gold futures/options, Credit Default Swaps (CDS), and stock option strategies. Modeled payoff scenarios to illustrate risk-reduction mechanisms.',
    methodsTools: 'Derivative Payoff Analysis, Currency Futures, Interest-Rate Swaps, Gold Futures/Options, Credit Default Swaps, Stock Option Strategies.',
    keyTakeaway: 'Appropriately calibrated derivative strategies reshape corporate risk profiles by bounding downside exposure without incurring prohibitive premium drag, stabilizing operating cash flows during volatile market regimes.',
    evidenceFilesLinks: [
      { label: 'Derivatives Real-World Case Brief', type: 'doc' }
    ],
    metrics: [
      { label: 'ASSET CLASSES', value: 'Currency, Rates, Commodities, Credit, Equity' },
      { label: 'CORPORATE CASES', value: 'TCS (Currency) & Reliance (IRS)' },
      { label: 'HEDGING VEHICLES', value: 'Futures, Swaps, Options, CDS' }
    ]
  }
];

export const ADDITIONAL_ACADEMIC_PROJECTS: ProjectDetail[] = [
  {
    id: 'karvy-ethics',
    title: 'Karvy Stock Broking Scandal – CFA Ethics Analysis',
    subtitle: 'Fiduciary Duty, Client Asset Custody & Regulatory Enforcement',
    category: 'Ethics & Governance',
    label: 'Academic Group Project',
    shortDescription: 'Analysed SEBI findings on client-security misuse and mapped the case to CFA Standards III(A), I(A), I(D), IV(C), and VI(A).',
    tags: ['Ethics', 'Risk Management', 'Corporate Governance'],
    featured: false,
    problemObjective: 'Investigating regulatory lapses and unethical custodian practices in the Indian equity brokerage ecosystem following the Karvy Stock Broking insolvency.',
    whatIAnalysedBuilt: 'Co-analysed official SEBI regulatory orders regarding the illicit pledging and misuse of client securities. Used the CFA Institute Code of Ethics and Standards of Professional Conduct strictly as an ethical benchmark to examine fiduciary failures, focusing on Standards III(A) Loyalty, Prudence & Care, I(A) Knowledge of the Law, I(D) Misconduct, IV(C) Responsibilities of Supervisors, and VI(A) Disclosure of Conflicts.',
    methodsTools: 'SEBI Investigation Orders Review, CFA Institute Standards of Professional Conduct Mapping, Corporate Governance Evaluation.',
    keyTakeaway: 'Custodial integrity and clear separation of client funds from proprietary capital are foundational to financial system solvency; supervisory breakdowns critically erode capital market trust.',
    evidenceFilesLinks: [
      { label: 'CFA Ethics Case Study Brief', type: 'doc' }
    ],
    metrics: [
      { label: 'REGULATORY SOURCE', value: 'SEBI Enforcement Orders' },
      { label: 'ETHICAL BENCHMARK', value: 'CFA Standards III(A), I(A), I(D), IV(C), VI(A)' }
    ]
  },
  {
    id: 'hdfc-analytics',
    title: 'Business Analytics at HDFC Bank',
    subtitle: 'Descriptive, Diagnostic, Predictive & Prescriptive Banking Analytics',
    category: 'Banking & Analytics',
    label: 'Academic Group Project',
    shortDescription: 'Mapped descriptive, diagnostic, predictive, and prescriptive analytics to HDFC Bank use cases across customer journeys, lending, and risk.',
    tags: ['Banking & Analytics', 'Business Analytics'],
    featured: false,
    problemObjective: 'Examining how modern private sector banks employ multi-tier data analytics to streamline retail credit underwriting, risk assessment, and customer onboarding.',
    whatIAnalysedBuilt: 'Collaborated on an academic business analytics case study mapping the four archetypes of analytics (descriptive, diagnostic, predictive, and prescriptive) across HDFC Bank\'s operations. Examined customer journeys, credit and risk scoring, personalization, Straight-Through Processing (STP) automation, and fraud/anomaly monitoring.',
    methodsTools: 'Banking Value Chain Mapping, Analytics Typology Frameworks, Credit Risk Assessment Workflows.',
    keyTakeaway: 'The case study shows how descriptive, diagnostic, predictive, and prescriptive analytics can support customer journeys, lending decisions, risk monitoring, personalization, and process automation in banking.',
    evidenceFilesLinks: [
      { label: 'Banking Analytics Case Study Brief', type: 'doc' }
    ],
    metrics: [
      { label: 'INSTITUTION', value: 'HDFC Bank Ltd.' },
      { label: 'FRAMEWORK', value: '4-Tier Analytics Typology' }
    ]
  },
  {
    id: 'gfc-2008',
    title: 'The 2008 Global Financial Crisis – Origins, Transmission and India’s Response',
    subtitle: 'Subprime Securitisation, Systemic Contagion & Monetary Stabilisation',
    category: 'Macroeconomics & Sustainable Finance',
    label: 'Academic Group Project',
    shortDescription: 'Analysed subprime lending, securitisation, systemic contagion, global transmission, India\'s exposure, and RBI/government stabilisation measures.',
    tags: ['Macroeconomics', 'Risk Management'],
    featured: false,
    problemObjective: 'Understanding the systemic transmission channels of global liquidity shocks and evaluating countercyclical central banking intervention.',
    whatIAnalysedBuilt: 'Co-authored an academic group analysis detailing the genesis of the 2008 crisis through subprime mortgage securitization, credit rating failures, and repo liquidity freeze. Tracked global transmission channels into India via trade contraction, capital outflows, and dollar liquidity tightening, and analyzed the countercyclical monetary and fiscal response.',
    methodsTools: 'Macroeconomic Analysis, Contagion Channel Mapping, Monetary and Fiscal Policy Review.',
    keyTakeaway: 'The crisis illustrates how weaknesses in mortgage credit, securitisation, leverage, and liquidity can transmit globally, while policy responses in India focused on maintaining liquidity and limiting domestic spillovers.',
    evidenceFilesLinks: [
      { label: 'Financial Crisis Research Dossier', type: 'doc' }
    ],
    metrics: [
      { label: 'TRANSMISSION', value: 'Trade, Capital & Liquidity' },
      { label: 'POLICY FOCUS', value: 'RBI Monetary Countermeasures' }
    ]
  },
  {
    id: 'israel-hamas-economic-impact',
    title: 'Economic Impact of the 2023 Israel-Hamas War',
    subtitle: 'Fiscal Stress, Energy Volatility, Supply Chain Chokepoints & Market Sentiment',
    category: 'Macroeconomics & Sustainable Finance',
    label: 'Academic Group Project',
    shortDescription: 'Assessed economic effects on Israel and India, including fiscal pressure, labour disruption, tourism, trade, energy exposure, and wider spillovers.',
    tags: ['Macroeconomics', 'Risk Management'],
    featured: false,
    problemObjective: 'Evaluating the direct and spillover economic consequences of the Israel-Hamas war for Israel, India, bilateral trade, energy exposure, and broader market conditions.',
    whatIAnalysedBuilt: 'Conducted academic group research examining Israel\'s GDP, labour mobilization, tourism, fiscal and borrowing pressure, sector effects, and the implications for India through bilateral trade, crude-oil exposure, defence ties, and wider global spillovers.',
    methodsTools: 'Macroeconomic Impact Analysis, Trade and Energy Exposure Review, Sector Analysis, Geopolitical Risk Context.',
    keyTakeaway: 'The project highlights how geopolitical conflict can affect domestic activity directly while also transmitting internationally through trade, energy prices, investor sentiment, and fiscal pressure.',
    evidenceFilesLinks: [
      { label: 'Macro Geopolitical Impact Brief', type: 'doc' }
    ],
    metrics: [
      { label: 'KEY CHANNELS', value: 'Energy, Shipping, Bilateral Trade' },
      { label: 'REGION FOCUS', value: 'Middle East & India Trade Corridors' }
    ]
  },
  {
    id: 'sdgs-finance-lens',
    title: 'SDGs 8, 9 and 11 Through a Finance Lens',
    subtitle: 'Decent Work, Infrastructure Innovation & Sustainable Municipal Financing',
    category: 'Macroeconomics & Sustainable Finance',
    label: 'Academic Group Project',
    shortDescription: 'Connected decent work, industry/innovation, and sustainable cities to productivity, financial inclusion, municipal bonds, and PPPs.',
    tags: ['Macroeconomics', 'Financial Modelling'],
    featured: false,
    problemObjective: 'Examining how public and private capital allocation instruments can be mobilized to fund United Nations Sustainable Development Goals.',
    whatIAnalysedBuilt: 'Collaborated on an academic research project evaluating SDG 8 (Decent Work & Economic Growth), SDG 9 (Industry, Innovation & Infrastructure), and SDG 11 (Sustainable Cities) through a finance lens. Examined financial inclusion, municipal bonds, Public-Private Partnerships (PPPs), green financing, and links between infrastructure investment and sustainable development.',
    methodsTools: 'Sustainable Development Frameworks, Municipal Bond Review, PPP Analysis, Green Financing Concepts.',
    keyTakeaway: 'Financing mechanisms such as municipal bonds, PPPs, and green finance can support infrastructure and sustainable-city objectives when paired with clear governance and project viability.',
    evidenceFilesLinks: [
      { label: 'SDG Finance Framework Paper', type: 'doc' }
    ],
    metrics: [
      { label: 'SDG TARGETS', value: 'Goals 8, 9 & 11' },
      { label: 'CAPITAL TOOLS', value: 'Municipal Bonds, PPPs, Green Finance' }
    ]
  },
  {
    id: 'digital-education-inequality',
    title: 'Bridging Digital Education Inequality in India',
    subtitle: 'Multidisciplinary Problem Scoping, Root-Cause Analysis & Stakeholder Mapping',
    category: 'Macroeconomics & Sustainable Finance',
    label: 'Academic Group Project',
    shortDescription: 'Scoped rural-urban digital education inequality using technology, economics, and sociology perspectives; mapped root causes and SDG 4/10 alignment.',
    tags: ['Business Analytics', 'Ethics'],
    featured: false,
    problemObjective: 'Scoping structural inequities in access to digital learning infrastructure between urban and rural school systems across Indian states.',
    whatIAnalysedBuilt: 'Collaborated on an academic problem-scoping study investigating the rural-urban digital divide through technological, economic, and socio-educational lenses. Mapped stakeholder ecosystems (government bodies, ed-tech providers, rural educators, and students), identified root causes of device and connectivity disparities, and aligned recommendations with SDG 4 (Quality Education) and SDG 10 (Reduced Inequalities).',
    methodsTools: 'Multidisciplinary Stakeholder Mapping, Root-Cause Analysis, Problem Scoping, SDG Alignment.',
    keyTakeaway: 'The project identifies device affordability, connectivity, electricity reliability, and digital literacy as linked barriers that must be addressed together to improve access to digital learning.',
    evidenceFilesLinks: [
      { label: 'Digital Education Scoping Report', type: 'doc' }
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Public Policy & Infrastructure' },
      { label: 'ALIGNMENT', value: 'UN SDGs 4 & 10' }
    ]
  }
];

export const ALL_PROJECTS: ProjectDetail[] = [
  ...FEATURED_PROJECTS,
  ...ADDITIONAL_ACADEMIC_PROJECTS
];

export const CATEGORIES = [
  'All',
  'Equity Research & Valuation',
  'Investment & Portfolio Analysis',
  'Markets & Risk',
  'Banking & Analytics',
  'Ethics & Governance',
  'Macroeconomics & Sustainable Finance'
] as const;

export type ProjectCategory = typeof CATEGORIES[number];
