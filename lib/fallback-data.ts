import { AnalysisResponse } from "./types";

export const FALLBACK_DATASET: Record<string, AnalysisResponse> = {
  "coffee grounds": {
    material: "Used Coffee Grounds",
    category: "Organic Food & Beverage Residuals",
    resourcePotential: "Nutrient-Dense Organic Biomass & Essential Oil Feedstock",
    resourceDescription: "High in nitrogen, residual lipids, antioxidants, and cellulose fibers suitable for bio-composites, substrate enrichment, and skincare formulations.",
    productIdeas: [
      {
        name: "Soil Conditioner & Organic Fertilizer",
        description: "Slow-release nitrogen-rich compost additive providing potassium and phosphorus for horticulture.",
        benefit: "Reduces dependence on synthetic chemical fertilizers while retaining soil moisture."
      },
      {
        name: "Gourmet Mushroom Cultivation Substrate",
        description: "Sterilized growing substrate optimized for high-yield oyster and shiitake mushroom farming.",
        benefit: "Upcycles high-volume hospitality waste into premium edible protein streams."
      },
      {
        name: "Bio-Composite Tableware & Pellets",
        description: "Extruded bio-polymer pellets combined with dried coffee grounds for biodegradable cups and trays.",
        benefit: "Replaces petroleum-based single-use plastics with durable, bio-based alternatives."
      },
      {
        name: "Exfoliating Botanical Soap Bars",
        description: "Natural coarse particle base infused into artisanal soaps and cosmetic body scrubs.",
        benefit: "Eliminates synthetic plastic microbeads with a non-toxic, locally sourced exfoliant."
      }
    ],
    replacementOpportunity: "Synthetic nitrogen fertilizers, virgin plastic tableware polymers, and peat moss substrate",
    whyThisAlternative: "Coffee grounds are abundant in urban and hospitality environments, require minimal chemical pre-treatment, and provide immediate secondary value in local biological loops.",
    transformationSteps: [
      { step: 1, title: "Collect & Segregate", description: "Collect fresh grounds daily in breathable, dry containers from cafes and hotel kitchens to prevent premature mold formation." },
      { step: 2, title: "Dehydrate & Stabilize", description: "Solar or low-energy kiln dry grounds to reduce moisture below 10%, stabilizing biochemical properties for storage." },
      { step: 3, title: "Sift & Grade", description: "Filter out foreign debris and calibrate granule sizes depending on whether destination is bio-polymers or soil enhancement." },
      { step: 4, title: "Formulate & Compound", description: "Blend with organic binders, compost matrices, or mushroom mycelium spores according to chosen manufacturing stream." },
      { step: 5, title: "Distribute & Close Loop", description: "Deploy finished circular products to local farms, gardens, or return bio-cups to the original cafe." }
    ],
    circularityScore: 92,
    practicalityScore: 95,
    wastePotential: "Very High (~80% diversion potential from municipal organic waste)",
    resourcePotentialEstimate: "1 kg grounds can yield ~0.8 kg nutrient substrate or up to 4 bio-composite cups",
    waterImpact: "Diverting wet organic mass avoids methane generation in landfills and protects groundwater tables",
    suitableFor: ["Hotels & Resorts", "Cafes & Bakeries", "Urban Agriculture", "Hospitality Venues", "Cosmetic Artisans"],
    limitations: [
      "Prone to rapid mold growth if stored damp for >48 hours without aeration.",
      "High natural acidity requires balancing (liming) when applied directly to sensitive plant species."
    ],
    confidence: "High — Widely documented commercial upcycling pathways globally and in Nordic pilots.",
    isFallback: true
  },
  "plastic bottles": {
    material: "Plastic Bottles (PET)",
    category: "Polyethylene Terephthalate Thermoplastics",
    resourcePotential: "High-Purity Recoverable Polymer Flakes & Filament",
    resourceDescription: "Thermoplastic polyester that can be repeatedly melted, extruded, and spun into durable synthetic textiles or reformed into food-grade containers.",
    productIdeas: [
      {
        name: "Recycled Polyester (rPET) Technical Apparel",
        description: "High-tenacity spun yarn for outdoor jackets, staff uniforms, and thermal fleeces.",
        benefit: "Reduces demand for virgin crude oil extraction and saves approximately 70% energy versus virgin polyester."
      },
      {
        name: "Acoustic Insulation & Architectural Felt",
        description: "Pressed acoustic wall panels and interior ceiling baffles for modern Nordic architecture.",
        benefit: "Provides high sound absorption while diverting post-consumer plastic into multi-decade building lifespans."
      },
      {
        name: "3D Printing Filament (rPETG)",
        description: "Precision-extruded thermoplastic filament for prototyping and local repair parts.",
        benefit: "Enables distributed local manufacturing and on-demand spare part replacement."
      }
    ],
    replacementOpportunity: "Virgin petrochemical polyester, virgin PET packaging, and fiberglass acoustic insulation",
    whyThisAlternative: "PET is one of the most mechanically recyclable polymers with mature reverse logistics systems and predictable thermodynamic properties.",
    transformationSteps: [
      { step: 1, title: "Reverse Vending & Sorting", description: "Collect through deposit-return systems (such as Finland's Palpa model) and sort by clear/colored fractions." },
      { step: 2, title: "De-labeling & Shredding", description: "Remove PP caps and PVC sleeves, then shred clean bottles into uniform polymer flakes." },
      { step: 3, title: "Hot Wash & Decontamination", description: "Wash flakes with alkaline solution to remove adhesives, sugar residues, and surface contaminants." },
      { step: 4, title: "Pelletizing & Extrusion", description: "Melt flakes at 260°C under vacuum to re-polymerize and extrude into pellets or continuous yarn filaments." },
      { step: 5, title: "Manufacturing & Recirculation", description: "Weave into textiles or blow-mold into new certified circular bottles." }
    ],
    circularityScore: 88,
    practicalityScore: 92,
    wastePotential: "High (Proven high collection rates in standardized deposit regions)",
    resourcePotentialEstimate: "Approximately 25-30 PET bottles yield one adult size recycled fleece sweater",
    waterImpact: "Mechanical recycling uses significantly less process water than virgin cotton or polymer synthesis",
    suitableFor: ["Beverage Industry", "Hospitality Chains", "Apparel & Textile Manufacturers", "Building Construction"],
    limitations: [
      "Thermal degradation can shorten polymer chain length over repeated mechanical recycling cycles.",
      "Colored or multi-layer PET poses optical sorting challenges."
    ],
    confidence: "High — Established global and Scandinavian deposit recycling infrastructure.",
    isFallback: true
  },
  "cardboard": {
    material: "Cardboard & Corrugated Boxes",
    category: "Cellulose & Lignocellulosic Fiber Streams",
    resourcePotential: "Long-Fiber Kraft Cellulose & Molded Pulp Biomass",
    resourceDescription: "Strong softwood and unbleached Kraft fibers with exceptional tensile strength, cushioning properties, and biodegradability.",
    productIdeas: [
      {
        name: "Molded Fiber Cushioning Packaging",
        description: "Thermoformed biodegradable shock-absorbent trays for electronics, glassware, and logistics.",
        benefit: "Completely replaces expanded polystyrene (Styrofoam) cushions with 100% compostable packaging."
      },
      {
        name: "Hydro-Mulching & Soil Erosion Mats",
        description: "Shredded fiber blankets blended with native seeds for hillside stabilization and forestry replanting.",
        benefit: "Conserves soil moisture during seedling germination and decomposes into harmless humus."
      },
      {
        name: "Regenerated Heavy-Duty Shipping Cartons",
        description: "Re-pulped high-test corrugated fluting for regional distribution boxes.",
        benefit: "Eliminates the felling of mature timber and reduces forestry energy intensity by up to 50%."
      }
    ],
    replacementOpportunity: "Expanded polystyrene foam, single-use bubble wrap, and virgin Kraft pulp",
    whyThisAlternative: "Cardboard fibers can be recycled 5 to 7 times before fiber length deteriorates, making it a cornerstone of regional industrial circularity.",
    transformationSteps: [
      { step: 1, title: "Dry Collection & Baling", description: "Flatten and compress dry cartons at supermarkets, hotels, and logistics hubs to optimize transport density." },
      { step: 2, title: "Hydropulping & Screening", description: "Submerge in warm water hydropulpers to break paper into slurry and filter out tapes, staples, and waxes." },
      { step: 3, title: "De-inking & Cleaning", description: "Centrifugally separate printing inks, coatings, and mineral impurities." },
      { step: 4, title: "Refining & Sheet Forming", description: "Refine cellulose fibers to restore hydrogen bonding capacity and press through high-speed drying rollers." },
      { step: 5, title: "Corrugating & Die Cutting", description: "Flute medium papers and glue linerboards with starch-based adhesives into new structural packaging." }
    ],
    circularityScore: 94,
    practicalityScore: 96,
    wastePotential: "Very High (Dominant volume in modern e-commerce and retail supply chains)",
    resourcePotentialEstimate: "1 ton of recycled cardboard saves ~17 trees and up to 26,000 liters of water",
    waterImpact: "Modern closed-loop pulping mills recycle over 90% of internal process water",
    suitableFor: ["Logistics & Warehouses", "E-Commerce", "Hotels & Retail", "Forestry & Land Restoration"],
    limitations: [
      "Severe grease or chemical contamination (e.g., oily pizza boxes) degrades pulping batches.",
      "Moisture degrades structural rigidity during storage."
    ],
    confidence: "High — Industrial standard recycling processes with mature global processing facilities.",
    isFallback: true
  },
  "food waste": {
    material: "Food Waste & Kitchen Scraps",
    category: "Biodegradable Organic Fractions",
    resourcePotential: "Biomethane Gas & Humic-Rich Organic Digestate",
    resourceDescription: "High-caloric and nutrient-dense organic substrate capable of anaerobic biological digestion and microbial conversion into clean energy and soil amendments.",
    productIdeas: [
      {
        name: "Renewable Biomethane for Transport",
        description: "Upgraded biomethane fuel (CBG/LBG) for municipal buses, heavy transport, and hotel fleet vehicles.",
        benefit: "Displaces fossil diesel with a carbon-neutral local fuel source produced from kitchen residuals."
      },
      {
        name: "Pasteurized Bio-Fertilizer & Soil Conditioner",
        description: "Nutrient-balanced liquid and solid digestate rich in phosphorus, potassium, and nitrogen.",
        benefit: "Closes the nutrient loop by returning vital macro-nutrients directly back to agricultural soils."
      },
      {
        name: "Insect Protein Biomass (Black Soldier Fly Larvae)",
        description: "Controlled bioconversion of organic scraps into high-protein insect meal for sustainable aquaculture.",
        benefit: "Replaces wild-caught fishmeal and imported soy protein in aquafeed."
      }
    ],
    replacementOpportunity: "Fossil diesel, synthetic nitrogen fertilizers, and wild-harvested fishmeal",
    whyThisAlternative: "Organic waste represents nearly a third of all municipal waste; converting it locally prevents potent landfill methane emissions and builds regional energy resilience.",
    transformationSteps: [
      { step: 1, title: "Source Separation", description: "Strict segregation in commercial kitchens using dedicated bio-bins to avoid plastic film contamination." },
      { step: 2, title: "Depackaging & Maceration", description: "Mechanical shredding and screening to homogenize wet slurry and eliminate micro-plastics." },
      { step: 3, title: "Thermal Pasteurization", description: "Heat treatment at 70°C for 1 hour to neutralize pathogens and meet strict veterinary standards." },
      { step: 4, title: "Anaerobic Digestion", description: "Microbial breakdown inside sealed anaerobic digesters over 20-30 days producing biogas (CH4 + CO2)." },
      { step: 5, title: "Gas Upgrading & Fertilizer Application", description: "Scrub CO2 to yield 97%+ biomethane fuel while separating nutrient digestate for regional crops." }
    ],
    circularityScore: 90,
    practicalityScore: 88,
    wastePotential: "Extremely High (Highest weight fraction in municipal and hospitality waste)",
    resourcePotentialEstimate: "1 ton of food waste generates ~100-120 m³ biomethane (equivalent to ~110L petrol) + 800kg bio-fertilizer",
    waterImpact: "Prevents toxic leachate generation in landfills that threatens local freshwater reserves",
    suitableFor: ["Hotel Buffets", "Restaurants & Canteens", "Municipalities", "Farming Cooperatives", "Transport Fleets"],
    limitations: [
      "Requires airtight logistics and odor management systems.",
      "High sensitivity to non-compostable plastic and glass contaminants in feedstock."
    ],
    confidence: "High — Standard municipal biogas infrastructure in Northern Europe.",
    isFallback: true
  },
  "old textile": {
    material: "Old Textiles & Used Clothing",
    category: "Mixed Synthetic & Natural Fabric Blends",
    resourcePotential: "Regenerated High-Strength Cellulose & Synthetic Staple Fibers",
    resourceDescription: "Spinnable cotton and polyester fibers suitable for chemical dissolution, mechanical garnetting, and structural composite matrixes.",
    productIdeas: [
      {
        name: "Circular Spun Fiber (Infinna / Circulose Style)",
        description: "Chemically regenerated premium textile fiber with the soft hand-feel of virgin cotton.",
        benefit: "Cuts virgin cotton farming impacts (irrigation water and pesticides) by more than 85%."
      },
      {
        name: "Thermal & Acoustic Building Insulation",
        description: "Dense fiber batts for interior wall cavity thermal insulation and sound deadening.",
        benefit: "Replaces mineral rockwool or fiberglass with non-itchy, recycled post-consumer batting."
      },
      {
        name: "Automotive Sound Baffles & Trunk Liners",
        description: "Needle-punched nonwoven acoustic mats for automotive interiors and structural sound deadening.",
        benefit: "Diverts unwearable blended garments from municipal incineration."
      }
    ],
    replacementOpportunity: "Virgin conventional cotton, petrochemical polyester, and glass-wool insulation",
    whyThisAlternative: "Textile production is one of the world's most resource-intensive industries; fiber-to-fiber recycling is critical to meeting EU and Nordic zero-waste mandates.",
    transformationSteps: [
      { step: 1, title: "Automated NIR Sorting", description: "Scan and categorize garments by fiber composition (100% cotton, poly-cotton blends, wool) via Near-Infrared sensors." },
      { step: 2, title: "Hardware Removal", description: "Trim and remove metallic zippers, plastic buttons, elastane seams, and decorative elements." },
      { step: 3, title: "Mechanical Garnetting / Chemical Dissolution", description: "Shred fabric into fluffy staple fibers or dissolve cellulose into liquid pulp for re-spinning." },
      { step: 4, title: "Carding & Filament Extrusion", description: "Align fibers through carding engines or wet-spin dissolved cellulose into clean monofilaments." },
      { step: 5, title: "Yarn Spinning & Weaving", description: "Spin circular yarn into brand-new high-value garments or compress into technical insulation panels." }
    ],
    circularityScore: 86,
    practicalityScore: 80,
    wastePotential: "High (Rapidly accelerating due to fast-fashion disposal volumes)",
    resourcePotentialEstimate: "1 kg recycled textile fiber saves ~10,000 to 20,000 liters of agricultural water compared to virgin cotton",
    waterImpact: "Massively eliminates irrigation freshwater drawdowns in water-stressed cotton-growing river basins",
    suitableFor: ["Hotels (Bed Linens & Uniforms)", "Fashion & Apparel", "Interior Design", "Automotive & Acoustic Engineering"],
    limitations: [
      "Elastane/spandex blends (>3%) complicate mechanical tearing and chemical recycling.",
      "Dyes and finishes require specialized de-coloration processes."
    ],
    confidence: "Medium-High — Commercial textile-to-fiber facilities operational in Finland and Scandinavia.",
    isFallback: true
  },
  "glass bottles": {
    material: "Glass Bottles & Jars",
    category: "Silicate & Soda-Lime Mineral Glass",
    resourcePotential: "Infinite Cullet Feedstock & Cellular Glass Aggregates",
    resourceDescription: "100% recyclable inorganic amorphous solid that can be melted indefinitely without loss of chemical purity, structural clarity, or mechanical strength.",
    productIdeas: [
      {
        name: "Closed-Loop Remanufactured Glass Bottles",
        description: "New food-grade jars, wine bottles, and beverage containers with up to 90% cullet content.",
        benefit: "Lowers furnace melting temperatures, cutting energy use and CO2 emissions by ~30%."
      },
      {
        name: "Foam Glass Lightweight Sub-Base Gravel (Foamit)",
        description: "Porous cellular glass aggregates used as lightweight frost insulation and backfill in civil engineering.",
        benefit: "Replaces heavy quarried gravel and extruded polystyrene foam in infrastructure projects."
      },
      {
        name: "Abrasive Blasting Media & Micro-Filtration Sand",
        description: "Precision-crushed angular glass grit for non-toxic industrial surface cleaning and pool water filters.",
        benefit: "Eliminates toxic crystalline silica hazard for sandblasting workers."
      }
    ],
    replacementOpportunity: "Virgin silica sand, soda ash flux, quarried road gravel, and chemical sandblasting media",
    whyThisAlternative: "Glass is genuinely infinitely circular; melting recycled cullet requires significantly lower furnace temperatures than fusing virgin quartz sand.",
    transformationSteps: [
      { step: 1, title: "Color-Separated Collection", description: "Gather unbroken bottles via hospitality return crates or municipal optical collection bins (Clear, Amber, Green)." },
      { step: 2, title: "Crushing & Metal Removal", description: "Coarsely crush glass into cullet while using eddy-current magnets to extract aluminum caps and steel rings." },
      { step: 3, title: "Optical Sorting & Washing", description: "High-speed camera air jets eject ceramic, stone, and porcelain impurities, followed by water washing." },
      { step: 4, title: "Furnace Batch Melting", description: "Blend sorted cullet with minor flux minerals in high-efficiency regenerative furnaces at 1500°C." },
      { step: 5, title: "Blow-and-Blow Forming & Annealing", description: "Mold molten glass gob into precision bottles, cool slowly in annealing lehrs to relieve thermal stress." }
    ],
    circularityScore: 98,
    practicalityScore: 95,
    wastePotential: "High (Heavy inert weight in food service and tourism waste streams)",
    resourcePotentialEstimate: "1 ton of recycled glass saves 1.2 tons of virgin raw materials and 315 kg of furnace CO2",
    waterImpact: "Mining virgin silica sand requires intensive river dredging and washing; cullet eliminates raw extraction water use",
    suitableFor: ["Beverage Companies", "Bars, Restaurants & Resorts", "Civil Construction & Roads", "Water Filtration Plants"],
    limitations: [
      "High shipping weight requires localized collection and regional furnace hubs.",
      "Ceramic or heat-resistant Pyrex contamination can ruin an entire furnace melt batch."
    ],
    confidence: "High — One of the world's most mature and effective circular materials.",
    isFallback: true
  },
  "wood waste": {
    material: "Wood Waste & Timber Offcuts",
    category: "Lignocellulosic Solid Biomass",
    resourcePotential: "Structural Particleboard Flakes & Activated Biochar Carbon",
    resourceDescription: "Solid softwood and hardwood residuals rich in lignin and cellulose, ideal for particle composites, pyrolysis biochar, and bio-energy pellets.",
    productIdeas: [
      {
        name: "Engineered Particleboard & OSB Panels",
        description: "Chipped and compressed furniture-grade panels bonded with eco-resins for modular interior design.",
        benefit: "Stores sequestered biogenic carbon inside long-lived building structures instead of decomposing."
      },
      {
        name: "Agricultural Biochar & Soil Carbon Sink",
        description: "Pyrolyzed stable carbon porous granules for soil water retention and permanent carbon drawdown.",
        benefit: "Improves sandy soil fertility while locking carbon in the ground for hundreds of years."
      },
      {
        name: "Standardized Shipping Pallets & Crates",
        description: "Dismantled, graded, and reconstructed EUR-pallets for regional industrial freight networks.",
        benefit: "Prevents fresh harvesting of virgin pine and spruce forests."
      }
    ],
    replacementOpportunity: "Virgin forestry logs, synthetic soil wetting agents, and fossil heating oil",
    whyThisAlternative: "Wood cascades follow the Nordic bioeconomy principle: cascade from long-life structural use to soil amendment before any thermal energy recovery.",
    transformationSteps: [
      { step: 1, title: "Visual Inspection & Grading", description: "Sort clean untreated timber from painted, pressure-treated, or creosote-contaminated construction demolition." },
      { step: 2, title: "De-Nailing & Chipping", description: "Pass lumber through heavy magnetic separators to strip nails, screws, and brackets before industrial chipping." },
      { step: 3, title: "Flaking & Moisture Calibration", description: "Process into uniform micro-flakes and dry in rotary drums to consistent 3% moisture content." },
      { step: 4, title: "Resin Blending & Hydraulic Pressing", description: "Apply bio-based lignin or poly-resin binders and press under heat (200°C) into structural composite boards." },
      { step: 5, title: "Finishing & Carbon Tracking", description: "Sand, edge-trim, and stamp boards with circular origin certification for furniture manufacturers." }
    ],
    circularityScore: 90,
    practicalityScore: 92,
    wastePotential: "High (Significant offcuts in construction, renovation, and furniture manufacturing)",
    resourcePotentialEstimate: "1 ton of recycled wood panels sequesters ~1.5 tons of CO2 equivalent over its operational lifespan",
    waterImpact: "Dry mechanical chipping processes require near-zero industrial process water",
    suitableFor: ["Construction Sites", "Carpentry & Joinery Workshops", "Pallet Logistics", "Community Gardens & Agroforestry"],
    limitations: [
      "Treated wood containing CCA (copper-chromium-arsenate) or heavy halogenated paints cannot be safely composited or chipped.",
      "Bulky storage footprint."
    ],
    confidence: "High — Standard practice across Nordic sustainable forestry and timber engineering.",
    isFallback: true
  },
  "aluminium cans": {
    material: "Aluminium Cans",
    category: "Non-Ferrous Lightweight Alloys",
    resourcePotential: "High-Purity Molten Ingot & Continuous Coil Alloy (Series 3000/5000)",
    resourceDescription: "High-strength, lightweight non-ferrous metal that can be remelted infinitely with only 5% of the energy needed for primary bauxite smelting.",
    productIdeas: [
      {
        name: "Can-to-Can Circular Beverage Cans",
        description: "Rolled body and end stock manufactured directly back into pressure-tight beverage cans within 60 days.",
        benefit: "Saves 95% of energy and eliminates 95% of greenhouse gas emissions versus smelting virgin bauxite ore."
      },
      {
        name: "Lightweight Automotive Structural Castings",
        description: "Remelted alloy blocks for electric vehicle motor housings, suspension brackets, and chassis frames.",
        benefit: "Reduces vehicle curb weight, directly extending EV range and battery efficiency."
      },
      {
        name: "Bicycle Frames & Architectural Cladding",
        description: "Extruded high-tensile tubes for lightweight commuter bicycles and weatherproof facade panels.",
        benefit: "Provides corrosion-proof longevity in harsh northern climates without maintenance."
      }
    ],
    replacementOpportunity: "Virgin bauxite-derived aluminium, steel vehicle panels, and virgin architectural cladding",
    whyThisAlternative: "Aluminium recycling is the world's most economically viable and energy-saving circular closed-loop pathway.",
    transformationSteps: [
      { step: 1, title: "Deposit Collection & Baling", description: "Recover through reverse vending machines and compact into dense, transport-efficient briquettes." },
      { step: 2, title: "Shredding & De-coating", description: "Shred cans into potato-chip size fragments and pass through 500°C thermal de-coaters to vaporize paint and lacquer." },
      { step: 3, title: "Reverberatory Furnace Melting", description: "Submerge de-coated chips into molten aluminium bath at 730°C with protective salt fluxes." },
      { step: 4, title: "Continuous Ingot Casting", description: "Cast molten metal into massive 25-ton rolling ingots measuring up to 10 meters in length." },
      { step: 5, title: "Cold Rolling & Deep Drawing", description: "Roll ingots under intense pressure down to 0.09mm sheet thickness and deep-draw into new cans." }
    ],
    circularityScore: 99,
    practicalityScore: 98,
    wastePotential: "Very High (High-volume consumer packaging in festivals, hotels, and tourist venues)",
    resourcePotentialEstimate: "Recycling 1 aluminium can saves enough electricity to power a TV for up to 3 hours",
    waterImpact: "Eliminates toxic red mud alkaline tailings and massive water consumption from bauxite strip mining",
    suitableFor: ["Tourism Venues & Festivals", "Hotels & Airlines", "Automotive Sector", "Building & Facade Engineering"],
    limitations: [
      "Separation of can lid alloys (5182 alloy) from can body alloys (3004 alloy) requires strict metallurgy control.",
      "High initial melting furnace capital costs."
    ],
    confidence: "High — Proven 95%+ return rates across Nordic deposit schemes.",
    isFallback: true
  },
  "used paper": {
    material: "Used Office & Print Paper",
    category: "De-Inked Fine Cellulosic Fiber",
    resourcePotential: "Clean De-Inked Pulp (DIP) & Tissue Substrate",
    resourceDescription: "Bleached chemical wood pulp with fine fiber matrix, suitable for high-grade sanitary hygiene paper, egg cartons, and stationery.",
    productIdeas: [
      {
        name: "Hospitality Sanitary Tissue & Towels",
        description: "Soft, highly absorbent 2-ply and 3-ply hand towels and toilet rolls for commercial restrooms.",
        benefit: "Supplies essential daily hospitality hygiene products without cutting virgin old-growth boreal forests."
      },
      {
        name: "Molded Seed Germination Pots",
        description: "Biodegradable seedling starter cups that can be planted directly into soil, dissolving naturally.",
        benefit: "Eliminates single-use black plastic nursery pots and avoids transplant root shock."
      },
      {
        name: "100% Recycled Stationery & Notebooks",
        description: "Smooth-finish unbleached office paper for eco-conscious enterprises and schools.",
        benefit: "Demonstrates transparent sustainability commitment in day-to-day administrative operations."
      }
    ],
    replacementOpportunity: "Virgin chemical wood pulp, plastic plant nursery pots, and virgin tissue stock",
    whyThisAlternative: "Office paper utilizes high-quality bleached chemical pulp fibers that readily reconstitute into premium tissue and molded products.",
    transformationSteps: [
      { step: 1, title: "Secure Source Collection", description: "Collect segregated dry white paper bins from offices, schools, and business administration suites." },
      { step: 2, title: "Pulping & Fiber Slurrying", description: "Mix with warm water in gentle drum pulpers to disintegrate paper into single cellulose fibers." },
      { step: 3, title: "Flotation De-Inking", description: "Inject air bubbles and natural soap reagents; ink particles attach to rising foam and are skimmed away." },
      { step: 4, title: "Oxidative Brightening", description: "Brighten fibers using chlorine-free hydrogen peroxide or ozone without damaging fiber integrity." },
      { step: 5, title: "Creping & Converting", description: "Press fiber web onto hot Yankee drying cylinders, crepe for softness, and perforate into rolled tissue products." }
    ],
    circularityScore: 91,
    practicalityScore: 94,
    wastePotential: "Moderate to High (Consistent commercial office and administration waste stream)",
    resourcePotentialEstimate: "1 ton of recycled office paper prevents ~3,800 kWh of energy and saves ~30,000 liters of water",
    waterImpact: "Closed-circuit clarification recovers and filters water for repeated washing cycles",
    suitableFor: ["Offices & Co-Working Spaces", "Hotels & Conference Centers", "Horticulture", "Education Campuses"],
    limitations: [
      "Thermal receipt paper containing BPA/BPS developer chemicals must be strictly excluded.",
      "Cannot be recycled infinitely as fibers shorten with each iteration."
    ],
    confidence: "High — Established global closed-loop paper repulping networks.",
    isFallback: true
  },
  "coconut shells": {
    material: "Coconut Shells & Husks",
    category: "Dense Lignified Agro-Industrial Biomass",
    resourcePotential: "Microporous Activated Carbon & Coir Geotextile Fibers",
    resourceDescription: "Extremely hard, high-density carbon matrix with natural microporosity, making it the premier global precursor for water and air purification filters.",
    productIdeas: [
      {
        name: "Ultra-High Purity Activated Carbon Filters",
        description: "Steam-activated micro-porous carbon granules for residential drinking water filters and air purifiers.",
        benefit: "Replaces coal-derived activated carbon with a renewable agricultural by-product filter medium."
      },
      {
        name: "Erosion Control Coir Geotextiles & Matting",
        description: "Heavy woven coir mesh for riverbank stabilization, trail reinforcement, and vegetation support.",
        benefit: "Provides 100% natural, biodegradable slope protection that lasts 3–5 years until plant roots take over."
      },
      {
        name: "Artisanal Serving Bowls & Nordic Spa Accessories",
        description: "Hand-sanded, coconut-oil-polished organic bowls for hotel smoothies, breakfast buffets, and spa amenities.",
        benefit: "Transforms discarded shell halves into durable, food-safe rustic hospitality tableware."
      }
    ],
    replacementOpportunity: "Bituminous coal-based carbon, plastic synthetic geotextile nets, and ceramic/plastic dessert bowls",
    whyThisAlternative: "Coconut shells have the highest surface-area-to-volume ratio of any natural carbon precursor when steam-activated, creating unmatched filtration efficiency.",
    transformationSteps: [
      { step: 1, title: "Extraction & De-husking", description: "Separate outer fibrous husk (for coir fiber) from the hard inner endocarp shell after fruit processing." },
      { step: 2, title: "Sun-Drying & Crushing", description: "Dry shells in natural sunlight to <12% moisture and crush into 4-8 mesh granular chips." },
      { step: 3, title: "Pyrolysis Carbonization", description: "Heat crushed shells in oxygen-starved rotary kilns at 500–600°C to produce raw bio-charcoal." },
      { step: 4, title: "Superheated Steam Activation", description: "Inject superheated steam at 900–1100°C to blow open microscopic pores, creating surface areas >1,200 m²/g." },
      { step: 5, title: "Classification & Packaging", description: "Acid wash (if required for medical grade), dry, screen into calibrated sizes, and seal in airtight filter cartridges." }
    ],
    circularityScore: 93,
    practicalityScore: 89,
    wastePotential: "Moderate to High (Very high in tropical tourism, food processing, and beverage sectors)",
    resourcePotentialEstimate: "3 kg of raw coconut shell yields ~1 kg of world-class activated carbon with 1,000,000 m² internal surface area",
    waterImpact: "Protects natural waterways by providing the fundamental natural filter medium that removes toxic VOCs and heavy metals",
    suitableFor: ["Tropical Resorts & Hotels", "Water Purification Plants", "Eco-Spa Facilities", "Landscaping & Civil Works"],
    limitations: [
      "Pyrolysis produces exhaust gases that require thermal oxidizers or scrubber units to prevent smoke pollution.",
      "Requires regional transport if sourced outside coconut-growing zones."
    ],
    confidence: "High — Universally recognized as the world standard for premium water filtration carbon.",
    isFallback: true
  }
};

export function findFallbackData(materialInput: string): AnalysisResponse | null {
  const query = materialInput.toLowerCase().trim();

  // 1. Direct exact match
  if (FALLBACK_DATASET[query]) {
    return { ...FALLBACK_DATASET[query], isFallback: true };
  }

  // 2. Keyword matching
  for (const [key, data] of Object.entries(FALLBACK_DATASET)) {
    if (query.includes(key) || key.includes(query)) {
      return { ...data, isFallback: true };
    }
  }

  // 3. Synonym mapping
  const synonymMap: Record<string, string> = {
    coffee: "coffee grounds",
    espresso: "coffee grounds",
    grounds: "coffee grounds",
    plastic: "plastic bottles",
    pet: "plastic bottles",
    bottle: "plastic bottles",
    bottles: "plastic bottles",
    paper: "used paper",
    box: "cardboard",
    boxes: "cardboard",
    carton: "cardboard",
    cartons: "cardboard",
    food: "food waste",
    organic: "food waste",
    scraps: "food waste",
    compost: "food waste",
    textile: "old textile",
    textiles: "old textile",
    clothes: "old textile",
    clothing: "old textile",
    fabric: "old textile",
    cotton: "old textile",
    glass: "glass bottles",
    jar: "glass bottles",
    jars: "glass bottles",
    wood: "wood waste",
    timber: "wood waste",
    sawdust: "wood waste",
    pallet: "wood waste",
    can: "aluminium cans",
    cans: "aluminium cans",
    aluminum: "aluminium cans",
    aluminium: "aluminium cans",
    coconut: "coconut shells",
    coir: "coconut shells"
  };

  for (const [token, targetKey] of Object.entries(synonymMap)) {
    if (query.includes(token)) {
      const fallback = FALLBACK_DATASET[targetKey];
      if (fallback) {
        return { ...fallback, isFallback: true };
      }
    }
  }

  return null;
}
