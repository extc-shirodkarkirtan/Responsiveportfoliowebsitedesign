import { ArrowLeft } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { ButtonPrimary } from "../components/ButtonPrimary";
import waterTreatmentImage from "figma:asset/f6bd03b8bd8ca09184547a278c6d164e309ccdc6.png";
import toolHoldersImage from "figma:asset/8f94314db48e4a9e405f39a456524c0b951ae867.png";
import buttonPresserImage from "figma:asset/5a9bbcf4bf4bd27731236306c9eeb966cdd941c9.png";
import footScannerImage from "figma:asset/dc37c33a5884c7a4ec67a07028b30cd6e7b6ce2f.png";
import tabletHolderImage from "figma:asset/61aceda7f613f78789b23053e6d9c2b7df03e96f.png";
import medicalDryerImage from "figma:asset/856c09c601908cdf803d46d79c7f825e39dcbb20.png";
import umpireIndicatorImage from "figma:asset/8b7ca41070992a30329aaae62c3a971b6d1ea15f.png";
import automotiveGrilleCAD from "figma:asset/ce0c9d53dd1b74afe8d90d33bf943752f5a0b021.png";
import automotiveGrilleMounting from "figma:asset/f9d6533a0e06344effe26f9005f9afae906d7dc8.png";
import automotiveGrilleFinal from "figma:asset/8e0cb7dd05618c8bf31f8cfffacbfb3cae93c64d.png";
import bmwVentHousing from "figma:asset/e87a4f95035895e8d834b82fdd89295f34d99a1d.png";
import bmwOvalBezels from "figma:asset/66b7050c299ad477d27b508f53eb7379c3d29844.png";
import bmwMountingBrackets from "figma:asset/89f4ed58ba1966238ca65d38276bf7e4054c1824.png";
import bmwSpeakerRings from "figma:asset/e3976a6248458aa6599afad60bd43a191576a45f.png";

interface CaseStudyTemplateProps {
  onBack: () => void;
  onContactClick: () => void;
  caseStudyId: string;
}

export function CaseStudyTemplate({
  onBack,
  onContactClick,
  caseStudyId,
}: CaseStudyTemplateProps) {
  // Case study data mapped by ID
  const caseStudyData: Record<string, any> = {
    "bmw-reverse-engineering": {
      title: "BMW Reverse Engineering Series — Treedy Labs",
      category: "Scan-to-CAD",
      subhead: "Digital reconstruction of 30+ BMW components from E30, E36, and E46 generations for restoration, customization, and prototyping",
      metric: "30+ parts delivered",
      client: "Treedy Labs — Eric Wallace",
      industry: "Automotive / Reverse Engineering",
      services: "Scan-to-CAD Lite (Auto/Mech)",
      timeline: "~1 day per part",
      deliverables: ["30+ high-precision STEP models", "Fully moldable and print-ready geometries", "Reference documentation for each model"],
      heroImage: bmwVentHousing,
      problem: {
        title: "Challenges & Constraints",
        content: `This project involved the reverse engineering and digital reconstruction of multiple BMW car components from the E30, E36, and E46 generations. The goal was to reproduce existing physical parts for restoration, customization, and prototyping purposes. Over 30 components were modeled—from grilles and intake ducts to speaker housings and vent panels—all with OEM-level precision.

Key challenges and constraints:
• Many original parts were partially damaged or incomplete, requiring reconstruction
• Client provided 3D scans with noise, artifacts, and missing areas
• Required tight OEM-level tolerances for snap fits and locking clips
• All components needed to be 3D-printable or mold-ready for manufacturing
• Fast delivery turnaround — approximately 1 day per part
• Exact replication of complex automotive geometry and features
• Maintaining precise fitment with existing OEM assemblies
• Multiple BMW generations (E30, E36, E46) with varying specifications
• Components ranged from grilles and intake ducts to speaker housings and vent panels
• Need for parametric modeling to allow future customization
• Export compatibility for both 3D printing and injection molding workflows`,
      },
      process: {
        title: "Reverse Engineering Process",
        steps: [
          {
            title: "Data Capture & Analysis",
            description: "Reviewed 3D scans and reference images provided by the client. Assessed scan quality, identified missing areas, and documented critical dimensions. Analyzed damage patterns on original parts to determine reconstruction requirements.",
          },
          {
            title: "CAD Reconstruction in Fusion 360",
            description: "Rebuilt the geometry parametrically using Fusion 360, working from scan data and reference measurements. Reconstructed damaged or missing features based on symmetry, engineering standards, and OEM design patterns. Created clean, manufacturable geometry.",
          },
          {
            title: "Tolerance Verification",
            description: "Adjusted all interfaces, snap fits, and locking clips for precise assembly fit. Validated critical dimensions against OEM specifications. Ensured proper clearances for 3D printing tolerances and mold shrinkage considerations.",
          },
          {
            title: "Client Review & Iteration",
            description: "Incorporated measurement feedback and test fit observations for each version. Made refinements based on physical prototyping results. Iterated on clip engagement, mounting features, and surface finish requirements.",
          },
          {
            title: "Final Export & Documentation",
            description: "Delivered production-ready STEP files optimized for both 3D printing and molding. Provided reference documentation for each model including key dimensions, material recommendations, and assembly notes.",
          },
        ],
      },
      result: {
        title: "Results & Client Impact",
        content: `The project enabled Treedy Labs to accelerate their reverse engineering pipeline, reducing part reconstruction time by 60%. Each delivered model matched perfectly with OEM assemblies, leading to continued collaboration on additional BMW restoration projects.

Key achievements:
• 30+ high-precision automotive components successfully reconstructed
• 60% reduction in part reconstruction time for client workflow
• Perfect OEM-level fitment achieved on all delivered parts
• Established long-term partnership through consistent quality and speed
• ~1 day turnaround per part—significantly faster than industry standard
• All models verified as 3D-printable and mold-ready
• Enabled client expansion into BMW restoration and customization market
• Recreated complex automotive parts with minimal scan input
• Maintained exact OEM-level fitting accuracy across multiple BMW generations
• Zero fit failures—all parts matched existing assemblies on first attempt

Client testimonial (5/5 across all categories):
"Understood complex requirements for reverse-engineering car parts and delivered accurate, print-ready models faster than expected." — Eric Wallace, Treedy Labs

⭐ Communication: 5/5
⭐ Quality: 5/5
⭐ Value: 5/5

Technical excellence:
• Parametric CAD modeling enabling future customization
• Scan-to-CAD workflow optimized for damaged/incomplete parts
• OEM-level tolerance management for snap fits and clips
• Dual-purpose geometry for both 3D printing and injection molding
• Fast iteration cycle maintaining high accuracy standards

Unique highlights:
• Recreated complex automotive parts from noisy scan data
• Maintained exact OEM-level fitting accuracy across 30+ unique components
• Established a long-term partnership through consistent quality and speed
• Demonstrated expertise across multiple BMW generation platforms (E30, E36, E46)
• Enabled client's business expansion into automotive restoration market`,
      },
      gallery: [
        { type: "render", caption: "Vent housing — BMW E36 showing snap-fit details and mounting features", image: bmwVentHousing },
        { type: "render", caption: "Oval bezels — BMW series showing mounting tabs and clip features", image: bmwOvalBezels },
        { type: "render", caption: "Elongated mounting bracket — BMW with precise locking mechanism", image: bmwMountingBrackets },
        { type: "render", caption: "Speaker rings — BMW showing retention clips and finishing details", image: bmwSpeakerRings },
      ],
    },
    "automotive-grille": {
      title: "Automotive Grille Reconstruction",
      category: "Scan-to-CAD",
      subhead: "Reverse-engineered car grille assembly from reference photos with hexagonal mesh structure and clip-in mounting features",
      metric: "5 days delivery",
      client: "Private Client",
      industry: "Automotive / Exterior Component Design",
      services: "Reverse Engineering & CAD Reconstruction",
      timeline: "5 days",
      deliverables: ["STEP files", "STL files", "Verified 3D printable geometry", "Fit-tested assembly model"],
      location: "USA",
      heroImage: automotiveGrilleCAD,
      problem: {
        title: "Problem & Constraints",
        content: `Design and recreate a car grille assembly using only reference photos and limited dimensional input. The grille includes a hexagonal mesh structure and clip-in mounting features that must fit precisely with the car's front fascia.

Key constraints and challenges:
• Limited inputs—only reference images and rough hand measurements available
• Required precision for clip alignment and fitment with existing car body
• Had to match OEM curvature of the car's body perfectly
• Ensuring full 3D printability without support structures
• Hexagonal mesh pattern requiring accurate parametric modeling
• Clip-in mounting features needing exact dimensional accuracy
• No physical part available for measurement or scanning
• Automotive-grade durability requirements for exterior use
• Material stress considerations for clip retention force
• Aesthetic consistency with OEM design language`,
      },
      process: {
        title: "Design & Development Process",
        steps: [
          {
            title: "Image Analysis & Proportion Scaling",
            description: "Conducted comprehensive analysis of reference photos to extract dimensional proportions and geometric relationships. Established scaling factors from known reference points and rough hand measurements to create accurate base dimensions.",
          },
          {
            title: "Initial CAD Reconstruction",
            description: "Reconstructed the grille and hexagonal mesh geometry in CAD based on analyzed proportions. Modeled the complex curvature matching the car's front fascia profile. Created parametric mesh pattern for consistent hexagonal structure across curved surface.",
          },
          {
            title: "Mid-Project Dimensional Refinements",
            description: "Incorporated client feedback and additional measurement data to refine critical dimensions. Adjusted clip positions, mounting tab geometry, and overall curvature based on test fit observations and client verification.",
          },
          {
            title: "Fit Validation Through Test Pieces",
            description: "Produced printed test pieces focusing on critical mounting features and clip alignment. Conducted iterative updates based on physical test fit results, adjusting tolerances and clip engagement depths for perfect OEM-like fit.",
          },
          {
            title: "Final Optimization & Export",
            description: "Optimized geometry for 3D printing and potential molding applications. Validated final model against all dimensional requirements. Exported production-ready STEP and STL files with verified printability and fit confirmation.",
          },
        ],
      },
      result: {
        title: "Results & Client Impact",
        content: `Achieved OEM-grade fit and finish using only limited data, saving the client significant time and cost on replacement part sourcing. The final 3D printed part fitted perfectly on the car with no post-processing required.

Key achievements:
• Perfect fit achieved on first final print—no adjustments needed
• OEM-quality appearance matching original design intent
• Reverse engineered entirely from photos and visual cues
• Maintained perfect curvature alignment with car body
• Functional clip retention matching factory specifications
• Efficient workflow enabling prototype validation in under a week
• 5-day turnaround from initial photos to final verified model
• Cost savings versus OEM replacement part sourcing
• Demonstrated viability of photo-based reverse engineering

Client testimonial:
"This was a tricky project since the original part was hard to measure, but the final model fit perfectly! The communication and accuracy were excellent — truly went above and beyond to make it work."

⭐ Communication: 5/5
⭐ Quality: 5/5  
⭐ Value: 5/5

Technical excellence:
• Photo-based dimensional extraction and scaling methodology
• Parametric hexagonal mesh pattern on compound curved surface
• Precision clip geometry with optimal retention force
• Print-optimized design eliminating support requirements
• Validated through iterative physical test fitting

Unique highlights:
• No 3D scanning required—pure photogrammetric reconstruction
• Complex organic curvature matched to automotive body contours
• Functional mounting system reverse engineered from visual analysis
• Rapid iteration cycle from concept to validated prototype`,
      },
      gallery: [
        { type: "render", caption: "CAD render showing hexagonal mesh structure and mounting features", image: automotiveGrilleCAD },
        { type: "photo", caption: "3D printed grille showing mounting tabs and clip details", image: automotiveGrilleMounting },
        { type: "photo", caption: "Final installed grille with perfect OEM-grade fit", image: automotiveGrilleFinal },
      ],
    },
    "umpire-indicator": {
      title: "Umpire Indicator",
      category: "Concept Sprint",
      subhead: "Functional umpire indicator with quiet reset mechanism tracking balls, strikes, and outs using compact mechanical dial system",
      metric: "First iteration success",
      client: "Private Client",
      industry: "Sports Equipment / Mechanical Design",
      services: "Concept-to-Prototype Sprint",
      timeline: "Concept to prototype",
      deliverables: ["STEP files", "STL files", "Assembly layout with motion diagram", "Prototype-ready 3D print files"],
      heroImage: umpireIndicatorImage,
      problem: {
        title: "Problem & Constraints",
        content: `The client wanted a durable, quiet, and ergonomic umpire counter that would improve upon noisy or stiff models currently on the market. The project focused on designing a functional umpire indicator that tracks balls, strikes, and outs using a compact mechanical dial system. The highlight feature was a quiet reset mechanism that resets only the Ball and Strike counters to zero while leaving Out unchanged—ideal for umpires during live games.

Key constraints and challenges:
• Small handheld device suitable for field use in various weather conditions
• Quiet spring-based return mechanism with independent reset for counters
• Smooth, tactile feedback for accurate count changes during fast-paced games
• Fully 3D printable with accessible desktop FDM printers
• Reliable function under repeated operation and field conditions
• Independent counter reset—Ball and Strike reset while Out remains unchanged
• Ergonomic grip for one-handed operation during active games
• Durable construction withstanding drops and outdoor use
• Easy assembly without specialized tools or expertise
• Cost-effective production through 3D printing technology`,
      },
      process: {
        title: "Design & Development Process",
        steps: [
          {
            title: "Concept Sketching & Research",
            description: "Studied commercial umpire indicators to identify weaknesses in usability and noise control. Analyzed existing mechanisms to understand failure points and opportunities for improvement in tactile feedback and reset functionality.",
          },
          {
            title: "Mechanism Development",
            description: "Designed a mini gear and lever assembly to isolate and reset specific counters independently. Developed the unique quiet reset mechanism that resets Ball and Strike counters while preserving the Out counter state—a critical innovation for field use.",
          },
          {
            title: "3D CAD Modeling in Fusion 360",
            description: "Modeled the enclosure and internal gears with tight printing tolerances optimized for FDM printing. Designed spring-based return mechanisms for smooth, quiet operation. Created ergonomic housing for comfortable one-handed grip during games.",
          },
          {
            title: "Simulation & Verification",
            description: "Ran comprehensive mechanical motion tests to validate gear interaction, reset movement, and durability under repeated cycling. Tested spring tension for optimal tactile feedback without excessive force requirements.",
          },
          {
            title: "Optimization & Prototyping",
            description: "Refined wall thicknesses, clearances, and tactile feedback mechanisms for repeatable operation. Optimized part orientation and support requirements for easy printing. Exported production-ready files for prototype printing and client validation.",
          },
        ],
      },
      result: {
        title: "Results & Client Impact",
        content: `The final design delivered a fully functional, silent-operation prototype that successfully balanced ergonomics, reliability, and innovative mechanical engineering.

Key achievements:
• Functional accuracy achieved on the first iteration
• Simplified assembly reduced user setup time by 30%
• All parts printable on standard desktop FDM printers
• Quiet reset mechanism significantly improved field usability
• Independent counter reset (Ball/Strike vs. Out) solved key pain point
• Smooth tactile feedback for confident operation during games
• Durable construction suitable for outdoor sports environments
• Cost-effective production through 3D printing technology

Client testimonial (5/5 Rating):
"Very pleased. I came to him with quite a complex invention. He figured out the mechanism that was needed to make it work to the best of its ability! He didn't give up and even went the extra mile to give an updated, more efficient version. Impressed and will be back, especially for functional designs." — Private Client

Technical excellence:
• Innovative spring-based quiet reset mechanism
• Precision gear and lever assembly for isolated counter control
• Tolerance-optimized design for reliable FDM printing
• Ergonomic handheld form factor for field use
• Mechanical motion validated through simulation

The project demonstrated expertise in functional mechanical design, solving complex mechanism challenges while maintaining manufacturability through accessible 3D printing technology.`,
      },
      gallery: [
        { type: "render", caption: "Front and back views showing Ball, Strike, and Out counters with mechanical dial system", image: umpireIndicatorImage },
        { type: "mechanism", caption: "Internal gear and lever assembly for independent counter reset" },
        { type: "assembly", caption: "Exploded view showing spring mechanism and tactile feedback system" },
      ],
    },
    "medical-dryer": {
      title: "Medical Dryer Enclosure",
      category: "Enclosures",
      subhead: "Compact, hygienic tabletop medical dryer enclosure for post-treatment use with integrated control interface and turbine fan system",
      metric: "1 week delivery",
      client: "Dott. Carlo Ventresca",
      industry: "Medical / Healthcare Device",
      services: "Concept-to-Prototype Sprint",
      timeline: "1 week",
      deliverables: ["STEP models", "STL files", "Rendering images", "Assembly documentation"],
      heroImage: medicalDryerImage,
      problem: {
        title: "Problem & Constraints",
        content: `The client needed a compact, hygienic, tabletop medical dryer for post-treatment use in clinical environments. The device required careful engineering to balance functionality, safety, and medical-grade hygiene standards.

Key constraints and challenges:
• Heat dissipation management within compact form factor
• Limited internal volume for electronics and turbine fan integration
• Sterilizable materials and surface finishes for medical environments
• Smooth surface transitions minimizing seams for hygiene compliance
• Integrating control interface within tight dimensional constraints
• Turbine fan placement for optimal airflow while maintaining compact footprint
• Access panels for maintenance without compromising aesthetic continuity
• Cable routing and port placement for clinical workflow optimization
• Manufacturing feasibility for medical-grade production standards
• Ergonomic design for tabletop placement in treatment rooms`,
      },
      process: {
        title: "Design & Development Process",
        steps: [
          {
            title: "Concept Ideation & Sketching",
            description: "Developed initial ergonomic concepts exploring vent layouts, control interface positioning, and overall form language. Created multiple sketches evaluating airflow patterns and user interaction points for clinical environments.",
          },
          {
            title: "3D CAD Modeling in Fusion 360",
            description: "Built comprehensive 3D models ensuring internal PCB fit, turbine fan integration, and proper spatial allocation for electrical components. Validated internal clearances and mechanical assembly sequences.",
          },
          {
            title: "Surface Refinement for Medical-Grade Hygiene",
            description: "Minimized panel seams and surface transitions to meet medical hygiene standards. Optimized surface continuity for easy cleaning and sterilization while maintaining structural integrity and manufacturing feasibility.",
          },
          {
            title: "Technical Detailing & Engineering",
            description: "Added precise port locations, fastener specifications, and panel access features. Designed ventilation grilles for optimal heat dissipation while preventing contamination. Finalized control interface integration with tactile feedback.",
          },
          {
            title: "Prototype Delivery & Documentation",
            description: "Exported production-ready STEP and STL files with comprehensive assembly documentation. Created photorealistic presentation renders in KeyShot showcasing design intent and manufacturing details.",
          },
        ],
      },
      result: {
        title: "Results & ROI",
        content: `The result was a fully manufacturable, prototype-ready medical dryer enclosure that enabled early testing within 1 week and reduced the client's product development cycle by 40%. The design successfully balanced medical practicality with modern, minimalist form language.

Key achievements:
• Compact tabletop design optimized for clinical environments
• Seamless surface transitions meeting medical hygiene standards
• Efficient heat dissipation through strategically placed ventilation
��� Integrated control interface with intuitive user interaction
• Production-optimized design reducing manufacturing complexity
• 1 week delivery timeline from concept to prototype files
• 40% reduction in product development cycle
• Early validation enabling faster market entry

Client testimonial:
"Excellent work — the design balances medical practicality and modern form. The surface modeling and interface layout were handled with great attention to usability and manufacturability." — Dott. Carlo Ventresca, Italy

Technical excellence:
• Tools used: Fusion 360 for CAD modeling, KeyShot for rendering
• Minimalist aesthetic with professional medical-grade appearance
• Ergonomic form factor for tabletop clinical use
• Complete technical documentation for manufacturing handoff

The project demonstrated efficient design thinking, rapid prototyping workflows, and attention to both functional requirements and aesthetic refinement suitable for medical device applications.`,
      },
      gallery: [
        { type: "render", caption: "Isometric view of medical dryer enclosure with integrated turbine fan", image: medicalDryerImage },
        { type: "detail", caption: "Control interface and ventilation grille detail" },
        { type: "assembly", caption: "Internal component layout and PCB integration" },
      ],
    },
    "car-tablet-holder": {
      title: "Car Tablet Holder",
      category: "Enclosures",
      subhead: "3D printable modular tablet mount integrating tablet, car charger, and holder into a single secure case for back seat installation",
      metric: "3 iteration cycles",
      client: "Vojta",
      industry: "Automotive Accessories / Consumer Design",
      services: "Concept-to-Prototype Sprint",
      timeline: "3 design iterations",
      deliverables: ["STEP files", "STL files", "Assembly renderings", "Animation video showing fit and installation"],
      heroImage: tabletHolderImage,
      problem: {
        title: "Problem & Constraints",
        content: `The client needed a 3D printable tablet mount that integrates a tablet, a car charger, and a car holder into a single modular case. The holder had to be firm, eliminate any play or movement of components, and attach easily to the back seat.

Key constraints:
• Ensuring snug fit for all components (tablet, charger, and holder)
• Maintaining proper charging alignment throughout use
• Eliminating any play or movement between integrated parts
• Easy attachment mechanism for back seat installation
• Keeping printability feasible without support structures
• Creating modular design allowing individual component replacement
• Balancing structural rigidity with lightweight design
• Achieving professional, OEM-style aesthetic integration
• Working from client-provided images and component measurements`,
      },
      process: {
        title: "Design & Development Process",
        steps: [
          {
            title: "Concept Sketch & Requirements Analysis",
            description: "Analyzed client's provided images and component measurements to understand integration requirements. Created initial concept sketches exploring modular assembly options and mounting strategies.",
          },
          {
            title: "Detailed CAD Assembly Development",
            description: "Modeled complete system in Fusion 360 with detailed CAD assemblies for each part: tablet frame, charger mount, and car holder bracket. Designed interlocking features for secure component integration.",
          },
          {
            title: "Tolerance Simulation & Fit Validation",
            description: "Conducted comprehensive tolerance simulations to ensure all elements fit seamlessly without play. Optimized clearances for 3D printing tolerances while maintaining firm grip on all components.",
          },
          {
            title: "Visualization & Client Review",
            description: "Created realistic renders and assembly animation to visualize the complete installation sequence. Collaborated directly with client through three iteration cycles to refine design aesthetics and assembly ease.",
          },
          {
            title: "Final Optimization & Documentation",
            description: "Finalized print-ready models with optimized orientation for support-free printing. Generated complete documentation including assembly instructions and installation sequence guidance.",
          },
        ],
      },
      result: {
        title: "Results & Client Impact",
        content: `The final 3D printed design achieved a secure fit between the tablet, charger, and holder, offering a professional, OEM-style integration that exceeded client expectations.

Key outcomes:
• Secure, play-free fit between all integrated components
• Proper charging alignment maintained throughout use
• Stable and reliable performance for in-car applications
• Support-free printability reducing post-processing time
• Professional aesthetic matching OEM quality standards
• Successful assembly and validation by client

Client testimonial:
"Working with Kirtan was incredibly easy. He understood my rough idea and turned it into a professional 3D design that exceeded expectations. The parts fit perfectly, and the renders helped me visualize the whole concept before printing. Highly recommended!" — Vojta

Technical achievements:
• Modular design allowing component-level maintenance
• Optimized print orientation for minimal material waste
• Animation documentation enabling clear assembly understanding
• Three iteration cycles ensuring perfect fit and usability

The project's smooth communication and on-time delivery resulted in a highly positive client experience, demonstrating the value of iterative design refinement and comprehensive visualization.`,
      },
      gallery: [
        { type: "render", caption: "Exploded assembly view showing modular components", image: tabletHolderImage },
        { type: "animation", caption: "Installation sequence animation" },
        { type: "assembly", caption: "Fully assembled tablet mount with integrated charger" },
      ],
    },
    "dime-foot-scanner": {
      title: "DIME Foot Scanner Enclosure – Kan Innovations Pvt. Ltd.",
      category: "Enclosures",
      subhead: "Precision enclosure for medical foot scanner combining aluminum and acrylic materials for durability and aesthetic transparency",
      metric: "10 business days delivery",
      client: "Kan Innovations Pvt. Ltd.",
      industry: "Medical Device / Health-Tech",
      services: "Device Enclosure Design",
      timeline: "10 business days",
      deliverables: ["STEP files", "DXF for CNC machining", "Assembly documentation"],
      heroImage: footScannerImage,
      problem: {
        title: "Problem & Constraints",
        content: `The client, Kan Innovations Pvt. Ltd., an Indian health-tech firm specializing in wearable and diagnostic devices, required a precision enclosure for their foot scanner system "DIME." The device scans a patient's foot through a top-mounted glass plate to calculate accurate dimensions for orthopedic or footwear fitting.

Key challenges:
• Lightweight yet rigid construction combining aluminum and acrylic materials
• Accurate alignment between scanner and glass plane critical for scan quality
• Proper mounting geometry for secure component positioning
• Maintaining manufacturability through CNC machining and laser-cut processes
• Balancing ease of assembly with precision requirements
• Ensuring consistent scanning accuracy across multiple units
• Keeping production costs reasonable for scalable manufacturing
• Durability requirements for clinical/retail environment use
• Aesthetic transparency to showcase technology while maintaining functionality`,
      },
      process: {
        title: "Design & Development Process",
        steps: [
          {
            title: "CAD Concept Sketch",
            description: "Created initial concept sketches based on scanner specifications and glass mounting requirements. Established material strategy combining aluminum structural components with acrylic viewing panels.",
          },
          {
            title: "Detailed 3D Modeling in Fusion 360",
            description: "Developed comprehensive enclosure design integrating structural reinforcement ribs and mounting points to securely hold both the glass platform and scanner components. Designed for hybrid material construction optimizing strength-to-weight ratio.",
          },
          {
            title: "Manufacturability Iterations",
            description: "Made several dimensional iterations to ensure manufacturability in aluminum and acrylic composite. Generated DXF layouts for CNC routing with proper tool paths and tolerance specifications for glass fitting.",
          },
          {
            title: "Tolerance Refinement & Assembly",
            description: "Conducted frequent design reviews to ensure proper part clearance and simplified assembly process. Made final tolerance refinements for precise glass fitting and scanner alignment. Client's internal team validated 3D models for scanning functionality.",
          },
          {
            title: "Final Documentation & Handoff",
            description: "Delivered complete STEP models and CNC-ready DXF drawings with comprehensive assembly documentation for manufacturer use. Included material specifications and assembly sequence guidance.",
          },
        ],
      },
      result: {
        title: "Results & Client Impact",
        content: `The final enclosure was successfully manufactured and assembled, meeting all functional and visual expectations. The design significantly improved scanner calibration consistency and simplified CNC production workflows.

Key outcomes:
• Improved scanner calibration consistency across production units
• Simplified CNC production with optimized DXF layouts
• Faster production timelines through streamlined assembly
• Better ergonomic interaction for patients during scans
• Reduced material waste through efficient nesting strategies
• Enhanced aesthetic appeal showcasing technology transparently

Client testimonial:
"Kirtan was responsive, creative, and incredibly patient throughout our project. He handled every revision quickly and with a smile, ensuring our enclosure design fit seamlessly with our electronics. If you need a reliable 3D designer with a can-do attitude, Kirtan's your guy." ⭐⭐⭐⭐☆
— Priyanka Pote, Operations Head, Kan Innovations Pvt. Ltd.

Business impact:
• High client satisfaction with precision and turnaround time
• Two additional follow-up enclosure projects secured
• Established ongoing partnership for medical device development
• 10 business day delivery timeline met all project milestones`,
      },
      gallery: [
        { type: "render", caption: "Isometric view of aluminum and acrylic enclosure assembly", image: footScannerImage },
        { type: "dxf", caption: "CNC-ready DXF layout with mounting geometry" },
        { type: "assembly", caption: "Exploded view showing glass platform integration" },
      ],
    },
    "automatic-button-presser": {
      title: "Automatic Button Pressing Machine",
      category: "Concept Sprint",
      subhead: "Compact, 3D-printable automatic machine with modular interlocking design for continuous button pressing using circular-to-linear motion",
      metric: "First-print success",
      client: "Evyatar",
      industry: "Automation / Educational Prototyping",
      services: "Concept-to-Prototype Sprint",
      timeline: "4 design iterations",
      deliverables: ["STEP files", "STL files", "Render images", "Motion simulation animations", "Ready-to-print documentation"],
      heroImage: buttonPresserImage,
      problem: {
        title: "Problem & Constraints",
        content: `The client, an Israeli innovator named Evyatar, needed a compact, 3D-printable automatic machine capable of continuously pressing a floor-mounted button using circular-to-linear motion. The design had to be modular and interlocking, allowing easy assembly like a puzzle without additional fasteners.

Key constraints:
• Limited motor torque requiring efficient motion conversion
• Tight space for electronic components within compact footprint
• Strict printability requirements for FDM printers
• Support-free printing to minimize post-processing
• Modular, interlocking assembly without fasteners
• Smooth, repeatable linear pressing motion required
• Mechanism must handle continuous operation cycles
• Parts must fit together precisely despite FDM tolerance limitations`,
      },
      process: {
        title: "Design & Development Process",
        steps: [
          {
            title: "Concept Sketches & Mechanism Selection",
            description: "Started with concept sketches based on client's references and requirements. Selected yoke and scotch mechanism as optimal solution for converting rotational motor motion into precise linear pressing action with limited torque.",
          },
          {
            title: "CAD Modeling in Fusion 360",
            description: "Developed detailed 3D models with modular, puzzle-like interlocking design. Engineered support-free geometry for all components while maintaining structural integrity and precise motion paths.",
          },
          {
            title: "Motion Simulation & STL Export",
            description: "Created motion simulations to validate mechanism performance and identify potential interference issues. Exported optimized STL files for 3D printing with proper orientation for minimal support requirements.",
          },
          {
            title: "Test Printing & Tolerance Refinement",
            description: "Performed multiple test prints across four major iterations. Focused on assembly optimization, friction reduction between moving parts, and precise motor alignment for consistent operation.",
          },
          {
            title: "Final Validation & Animation",
            description: "Assembled final prototype and validated through physical testing. Created comprehensive simulation animations demonstrating full motion cycle and operational sequence for client documentation.",
          },
        ],
      },
      result: {
        title: "Results & Client Impact",
        content: `The final prototype performed exactly as intended, achieving continuous button pressing with smooth operation and consistent linear motion. The modular design enabled intuitive assembly without instructions.

Client success:
• Successfully printed and assembled on the first try
• Full functionality confirmed immediately upon assembly
• No additional iterations or corrections required
• Smooth operation with reliable, repeatable motion

Client testimonial:
"Looks really good. It's working. Thank you very much." — Evyatar

Technical achievements:
• Support-free printing for all components
• Efficient yoke and scotch mechanism with limited torque
• Modular puzzle-like assembly without fasteners
• Minimal post-processing required
• Ready-to-print documentation for easy replication

The project demonstrated strong reliability and design precision through simulation-driven iteration, making it suitable for small-scale automation demonstrations and educational prototyping applications.`,
      },
      gallery: [
        { type: "render", caption: "Isometric view of modular button pressing mechanism", image: buttonPresserImage },
        { type: "animation", caption: "Motion simulation showing circular-to-linear conversion" },
        { type: "assembly", caption: "Exploded view of interlocking modular components" },
      ],
    },
    "ardelis-tool-holders": {
      title: "Custom 3D Printed Tool Holders for Ardelis Innovations",
      category: "Scan-to-CAD",
      subhead: "Precise series of 3D printed tool holders for custom workshop tools, developed from 3D scans with tight ±0.15mm tolerances",
      metric: "30+ holders, first-print fit",
      client: "Ardelis Innovations",
      industry: "Manufacturing / Tooling",
      services: "Scan-to-CAD Lite",
      timeline: "Ongoing collaboration",
      deliverables: ["STEP files", "STL files", "3MF files with color mapping", "Multi-material printing setup"],
      heroImage: toolHoldersImage,
      problem: {
        title: "Problem & Constraints",
        content: `Ardelis Innovations, a Belgium-based technology startup, needed to develop a precise series of 3D printed tool holders for their workshop. Each holder had to match the exact geometry of various custom tools captured through 3D scanning.

Key challenges:
• Each scan had surface irregularities and noise requiring manual mesh correction
• Converting mesh data into parametric CAD geometry while preserving accuracy
• Ensuring perfect fit for each holder to its respective tool
• Maintaining manufacturability for FDM 3D printing
• Optimizing print orientation to minimize material waste
• Tight tolerances of ±0.15 mm required for consistent tool seating and removal
• Balancing ergonomic placement with print-friendly geometry
• Reducing undercuts while maintaining proper grip balance`,
      },
      process: {
        title: "Design & Production Process",
        steps: [
          {
            title: "Mesh Cleaning & Geometry Analysis",
            description: "Imported raw 3D scans into Fusion 360 and performed comprehensive mesh refinement. Identified and corrected surface irregularities, noise, and scan artifacts to establish clean base geometry.",
          },
          {
            title: "Solid Model Reconstruction",
            description: "Used mesh refinement and feature recognition to convert cleaned scans into solid bodies. Established accurate reference geometry for each custom tool to ensure precise cavity dimensions.",
          },
          {
            title: "Parametric Design for Holder Fit",
            description: "Modeled customized cavities and supports for each holder, ensuring ergonomic placement and print-friendly geometry. Designed features to optimize tool grip and easy insertion/removal within tolerance specifications.",
          },
          {
            title: "Tolerance Check & 3D Preview",
            description: "Conducted preliminary fit simulations and made minor adjustments to reduce undercuts and improve grip balance. Validated all dimensions against ±0.15mm tolerance requirements and optimized print orientation.",
          },
          {
            title: "Multi-Material Export & Delivery",
            description: "Prepared final color-coded 3MF files for multi-material printing, strategically assigning flexible and rigid materials. Exported STEP and STL files and validated all models for printability. Delivered files in batches for faster client review.",
          },
        ],
      },
      result: {
        title: "Results & Client Impact",
        content: `The delivered files produced holders that fit perfectly on the first print, eliminating multiple rounds of prototyping and saving significant time and material costs for Ardelis Innovations.

Project scale & outcomes:
• Over 30 custom tool holders modeled as part of ongoing collaboration
• Zero fit issues - all holders worked on first print
• Workshop efficiency improved with 40% reduction in manual tool searching
• Storage clutter reduced by 40% through optimized holder organization
• Immediate integration into client's daily workflow

Client testimonial:
"Working with Kirtan was seamless from start to finish. He quickly turned our scanned tool files into accurate, perfectly fitting 3D printed molds and holders… I highly recommend Kirtan to anyone needing a skilled and dependable 3D designer." 
— Dawid Greyling, Ardelis Innovations

Business impact:
• Ongoing collaboration established with 30+ holders delivered
• Demonstrated expertise in scan-to-CAD workflow for manufacturing applications
• Multi-material printing optimization expanded service capabilities`,
      },
      gallery: [
        { type: "render", caption: "Custom tool holder with multi-material color mapping", image: toolHoldersImage },
        { type: "cad", caption: "Parametric CAD model showing cavity design" },
        { type: "assembly", caption: "Series of tool holders for workshop organization" },
      ],
    },
    "water-treatment-system": {
      title: "Water Treatment System in Truck",
      category: "Concept-to-Prototype Sprint",
      subhead: "Complete 3D design and working simulation video of a mobile water purification system mounted on a trailer truck",
      metric: "2 follow-up projects secured",
      client: "Water Treatment Plant Owner",
      industry: "Industrial Water Treatment",
      services: "Concept-to-Prototype Sprint",
      timeline: "3 weeks",
      deliverables: ["STEP files", "STL files", "Photorealistic renderings", "Full animation video", "Water flow simulation"],
      heroImage: waterTreatmentImage,
      problem: {
        title: "Challenge & Constraints",
        content: `The client, a water treatment plant owner and service provider, needed a complete 3D design and working simulation video of a mobile water purification system mounted on a trailer truck. The primary challenge involved translating a technical 2D drawing into a fully detailed 3D assembly.

Key constraints:
• Limited space within truck trailer dimensions
• Balanced load distribution on trailer chassis
• Accurate spatial organization of filtration tanks, piping, and control units
• Real-world flow paths between components must be accurately represented
• Confined truck layout requiring precise component placement
• Maintaining realistic proportions and visual clarity`,
      },
      process: {
        title: "Design & Production Process",
        steps: [
          {
            title: "Technical Drawing Analysis",
            description: "Imported and interpreted the client's 2D technical drawing, identifying all system components, dimensions, and spatial relationships. Documented flow paths and component dependencies.",
          },
          {
            title: "CAD Modeling & Layout",
            description: "Created detailed 3D models in Fusion 360 of all components: filtration tanks, piping systems, pumps, valves, and control units. Arranged internal layout ensuring realistic proportions and correct placements within trailer constraints.",
          },
          {
            title: "Mechanical Assembly Planning",
            description: "Optimized pipeline routing to minimize bends and maintain efficient flow direction. Made unique design adjustments to accommodate pump and valve positions while ensuring balanced weight distribution on chassis.",
          },
          {
            title: "Animation Setup in Blender",
            description: "Transferred models to Blender for animation. Created step-by-step visualization of system assembly sequence, showing how components fit together and integrate within the truck.",
          },
          {
            title: "Water Flow Simulation",
            description: "Developed animated water flow visualization showing the complete operational sequence: water intake at truck, flow through filtration stages, and purified water output at tap. Rendered photorealistic final animations.",
          },
        ],
      },
      result: {
        title: "Results & Client Impact",
        content: `The project successfully demonstrated functional visualization of an industrial water treatment system, providing the client with a powerful tool for presentations and system validation.

Client testimonial highlights:
• "Exactly matched the vision" - complete alignment with requirements
• Praised for creativity and attention to detail
• Appreciated professionalism and timely delivery
• Strong communication throughout the project

Tangible outcomes:
• Complete STEP and STL files for future manufacturing reference
• Photorealistic renderings for marketing materials
• Fully animated simulation video showcasing system operation
• Internal assembly motion visualization for technical documentation

Business impact:
• Two additional follow-up animation projects secured
• Served as proof of concept for future system modeling collaborations
• Enhanced client's ability to present complex technical systems to stakeholders`,
      },
      gallery: [
        { type: "render", caption: "Cross-section view showing internal component layout", image: waterTreatmentImage },
        { type: "animation", caption: "Water flow simulation through filtration stages" },
        { type: "assembly", caption: "Step-by-step assembly sequence animation" },
      ],
    },
    "iot-sensor-housing": {
      title: "IoT Sensor Housing",
      category: "Enclosures",
      subhead: "Compact enclosure for environmental sensor with snap-fit assembly",
      metric: "First-print fit, ±0.2 mm",
      client: "TechStart Inc",
      industry: "IoT / Smart Home",
      services: "Device Enclosure",
      timeline: "2 weeks",
      deliverables: ["STEP", "STL", "4 renders", "Assembly notes PDF"],
      problem: {
        title: "Problem & Constraints",
        content: `The client needed a compact, print-ready enclosure for an environmental sensor PCB with specific constraints:
      
• PCB dimensions: 45mm × 30mm × 1.6mm with components up to 8mm height
• Four mounting ports (USB-C, sensor window, status LED, reset button)
• IP54 rating for outdoor use
• Snap-fit assembly without fasteners
• Material: ABS for FDM printing
• Target tolerance: ±0.2mm for fit-critical features`,
      },
      process: {
        title: "Process",
        steps: [
          {
            title: "Constraints Capture",
            description: "Documented PCB layout, port locations, and tolerance requirements. Created constraint sketches in Fusion 360.",
          },
          {
            title: "Concept CAD",
            description: "Developed two-piece snap-fit design with integrated bosses, standoffs, and port cutouts. Included gasket groove for IP54 seal.",
          },
          {
            title: "First Fit-Check",
            description: "Client printed prototype and identified minor clearance issue on USB-C port. Adjusted wall thickness by 0.3mm.",
          },
          {
            title: "Final Iteration",
            description: "Refined snap-fit tabs for better retention. Added chamfers for easier assembly. Validated all dimensions.",
          },
          {
            title: "Deliverables",
            description: "Exported STEP, STL, and generated 4 photorealistic renders showing assembly sequence.",
          },
        ],
      },
      result: {
        title: "Result & ROI",
        content: `First production print achieved perfect fit with all PCB mounting points and ports aligned within ±0.2mm tolerance. Client saved 2 weeks of iteration time compared to previous projects.

Key outcomes:
• Zero fit issues on first print
• Snap-fit assembly worked as designed
• IP54 rating confirmed with gasket
• Client moved directly to production tooling

The clear CAD and assembly notes enabled the client's manufacturing partner to quote tooling immediately, accelerating their product launch timeline.`,
      },
      gallery: [
        { type: "render", caption: "Hero render - assembled view" },
        { type: "exploded", caption: "Exploded assembly view" },
        { type: "section", caption: "Section cut showing internal features" },
      ],
    },
  };

  const caseStudy = caseStudyData[caseStudyId] || caseStudyData["iot-sensor-housing"];

  return (
    <div className="pt-[72px]">
      {/* Back Button */}
      <div className="bg-[var(--surface)] border-b border-[var(--border-200)] py-4">
        <div className="max-w-[1200px] mx-auto px-[72px] lg:px-8 md:px-8 sm:px-[3px]">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[var(--accent-600)] hover:text-[var(--accent-700)] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-[72px] lg:px-8 md:px-8 sm:px-[3px]">
          <Badge
            variant="secondary"
            className="mb-4 bg-[var(--subsurface)] text-[var(--ink-700)] rounded-lg"
          >
            {caseStudy.category}
          </Badge>
          <h1 className="mb-4">{caseStudy.title}</h1>
          <p className="text-[var(--ink-700)] mb-6 max-w-3xl">{caseStudy.subhead}</p>
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-[var(--subsurface)] text-[var(--accent-600)] border border-[var(--border-200)]">
            <small>{caseStudy.metric}</small>
          </div>
        </div>
      </section>

      {/* Hero Image - only for projects with hero image */}
      {caseStudy.heroImage && (
        <section className="py-0 bg-[var(--subsurface)]">
          <div className="max-w-[1200px] mx-auto px-[72px] lg:px-8 md:px-8 sm:px-[3px]">
            <div className="aspect-video bg-[var(--surface)] rounded-2xl border border-[var(--border-200)] overflow-hidden">
              <img 
                src={caseStudy.heroImage} 
                alt={caseStudy.title}
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-[var(--subsurface)]">
        <div className="max-w-[1200px] mx-auto px-[72px] lg:px-8 md:px-8 sm:px-[3px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 sm:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                <div>
                  <h4 className="mb-3">Project Details</h4>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-[var(--muted-500)] mb-1">
                        <small>Client</small>
                      </dt>
                      <dd className="text-[var(--ink-900)]">{caseStudy.client}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--muted-500)] mb-1">
                        <small>Industry</small>
                      </dt>
                      <dd className="text-[var(--ink-900)]">{caseStudy.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--muted-500)] mb-1">
                        <small>Services</small>
                      </dt>
                      <dd className="text-[var(--ink-900)]">{caseStudy.services}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--muted-500)] mb-1">
                        <small>Timeline</small>
                      </dt>
                      <dd className="text-[var(--ink-900)]">{caseStudy.timeline}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--muted-500)] mb-1">
                        <small>Deliverables</small>
                      </dt>
                      <dd className="text-[var(--ink-900)]">
                        {caseStudy.deliverables.join(", ")}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              {/* Problem */}
              <div>
                <h3 className="mb-6">{caseStudy.problem.title}</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[var(--ink-700)] whitespace-pre-line">
                    {caseStudy.problem.content}
                  </p>
                </div>
              </div>

              {/* Gallery Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.gallery.slice(0, 2).map((item: any, index: number) => (
                  <div
                    key={index}
                    className="aspect-[4/3] bg-[var(--surface)] rounded-2xl border border-[var(--border-200)] flex items-center justify-center overflow-hidden"
                  >
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.caption}
                        className="w-full h-full object-contain bg-white"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 border-2 border-[var(--border-200)] rounded-lg transform rotate-45"></div>
                        <p className="text-[var(--muted-500)]">
                          <small>{item.caption}</small>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Process */}
              <div>
                <h3 className="mb-6">{caseStudy.process.title}</h3>
                <div className="space-y-8">
                  {caseStudy.process.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-600)] text-white flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="mb-2">{step.title}</h4>
                        <p className="text-[var(--ink-700)]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div>
                <h3 className="mb-6">{caseStudy.result.title}</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[var(--ink-700)] whitespace-pre-line">
                    {caseStudy.result.content}
                  </p>
                </div>
              </div>

              {/* Additional Gallery */}
              <div className="aspect-video bg-[var(--surface)] rounded-2xl border border-[var(--border-200)] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 border-2 border-[var(--border-200)] rounded-lg transform rotate-45"></div>
                  <p className="text-[var(--muted-500)]">
                    <small>{caseStudy.gallery[2].caption}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="xl:py-32 sm:py-18 bg-[var(--surface)]">
        <div className="mx-auto sm:px-3" style={{ maxWidth: '720px' }}>
          <div className="text-center">
            <h2 className="mb-4">Ready to Start Your Project?</h2>
            <p className="text-[var(--ink-700)] sm:max-w-full" style={{ marginBottom: '20px' }}>
              Book a free 10-minute feasibility check to discuss your requirements.
            </p>
            <div className="flex justify-center">
              <ButtonPrimary onClick={onContactClick}>
                Free 10-min Feasibility Check
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}