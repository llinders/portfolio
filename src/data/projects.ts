
export type ProjectType = "personal" | "school" | "schoolgroup" | "professional";

export interface Project {
  title: string;
  shortDescription: string;
  detailedDescription: string;
  mainTechnologies: string[];
  secondaryTechnologies: string[];
  date: string;
  type: ProjectType;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "PolyView",
    shortDescription: "Een AI-gestuurde onderzoekstool die diverse perspectieven over een bepaald onderwerp vindt om gebruikers een genuanceerd en holistisch beeld te geven.",
    detailedDescription: `PolyView is een AI-gestuurde onderzoekstool die diverse perspectieven over een bepaald onderwerp vindt om gebruikers een genuanceerd en holistisch beeld te geven. De applicatie analyseert nieuws-onderwerpen, identificeert verschillende standpunten, verzamelt ondersteunende argumenten en feiten, en presenteert een samengevatte analyse.

Het systeem bestaat uit drie hoofdonderdelen:
1.  Frontend (React): Communiceert met de backend via een REST API om analyses te starten en gebruikt een WebSocket voor real-time voortgangsupdates.
2.  Backend (FastAPI): Biedt een REST API en een WebSocket aan voor de frontend.
3.  AI Core (LangGraph): Het "brein" van de applicatie. Het bevat een autonome zoekagent die informatie van het web verzamelt en filtert. In een stateful graph worden taken zoals het identificeren, clusteren en samenvatten van perspectieven georkestreert.`,
    mainTechnologies: ["Python", "LangChain", "LangGraph"],
    secondaryTechnologies: ["FastAPI", "React", "TypeScript", "TailwindCSS", "Vite", "Node.js", "Pytest"],
    date: "juni. 2025 - sept. 2025",
    type: "personal",
    image: "./polyview.webp",
    githubUrl: "https://github.com/llinders/PolyView",
  },
  {
    title: "Afstudeerproject: Somtoday Copilot",
    shortDescription: "Een werkend prototype van een AI-applicatie voor automatische beantwoording van vragen over Somtoday aan de hand van lokale LLM's en Retrieval Augmented Generation (RAG). De afstudeeropdracht is uitgevoerd bij Topicus.",
    detailedDescription: `Een data pipeline/ETL-proces houdt kennis over Somtoday automatisch up-to-date door het, na een bewerkingsproces, op te slaan in een vector database (ChromaDB). De data pipeline is geschreven in Python en het Apache Airflow framework. De vector database dient als kennisbasis voor het LLM. RAG is toegepast om een LLM te voorzien van relevante context voor de gestelde vraag.
    Een PostgreSQL database is ontworpen voor het bijhouden van geschiedenis van chatgesprekken.`,
    mainTechnologies: ["Python", "LangChain", "Apache Airflow"],
    secondaryTechnologies: ["llama.cpp", "ChromaDB", "Pandas", "NumPY", "Pytest", "PostgreSQL", "Kubernetes", "Docker"],
    date: "sep. 2023 - mrt. 2024",
    image: "./somtoday-copilot.webp",
    type: "school"
  },
  {
    title: "PurposeFlow app",
    shortDescription: "",
    detailedDescription: "",
    mainTechnologies: ["Flutter"],
    secondaryTechnologies: ["Firebase", "Google Cloud Platform", "Pinecone"],
    date: "feb. 2025 - mei. 2025",
    type: "professional"
  },
  {
    title: "Cloud management applicatie",
    shortDescription: "Een Python-gebaseerde terminalapplicatie voor het automatisch genereren en deployen van Vagrantfiles op basis van gebruikersconfiguratie, waarmee cloudomgevingen snel en reproduceerbaar geprovisioned kunnen worden via Infrastructure as Code (IaC).",
    detailedDescription: "De terminalapplicatie is ontwikkeld in Python en ondersteunt gebruikers bij het beheren van cloudomgevingen via Infrastructure as Code. Op basis van de ingevoerde configuratie genereert de applicatie automatisch een Vagrantfile, waarmee vervolgens virtuele machines gedeployed worden naar een ESXi hypervisor. Dit proces elimineert handmatige configuratie en maakt het mogelijk om omgevingen snel, consistent en reproduceerbaar op te zetten.",
    mainTechnologies: ["Python", "Vagrant", "ESXi"],
    secondaryTechnologies: ["PostgreSQL"],
    date: "mrt. 2023 - juni. 2023",
    type: "school"
  },
  {
    title: "Stage onderzoek: Performance-optimalisatie E-Brida",
    shortDescription: `Onderzoek naar performance-optimalisatie van het veredelingssoftwarepakket E-Brida door de inzet van NoSQL-databases. Uitgevoerd bij Agri Information Partners.`,
    detailedDescription: `Het onderzoek richtte zich op de schaalbaarheidsbeperkingen van het bestaande EAV-datamodel in E-Brida bij het doorzoeken van plant- en zaadeigenschappen over meerdere generaties. Om deze bottlenecks te analyseren en te doorbreken zijn verschillende NoSQL-databases onderzocht en prototypen ontwikkeld. Deze prototypen dienden als proof-of-concept om de zoekprestaties en schaalbaarheid van het systeem te verbeteren.`,
    mainTechnologies: ["MSSQL", "MongoDB", "Cassandra"],
    secondaryTechnologies: [],
    date: "sep. 2018 - feb. 2019",
    image: "",
    type: "school"
  },
  {
    title: "LifeChart app",
    shortDescription: "Een Proof of Concept cross-platform app met Info Support als opdrachtgever voor GGZ-patienten met een bipolaire stoornis.",
    detailedDescription: `In de app kunnen GGZ-patienten met een bipolaire stoornis hun stemming, stemmingswisselingen, 
    ingrijpende gebeurtenissen, en nog meer vastleggen. De patienten kunnen via een scanbare QR code de gegevens 
    versleuteld delen met de behandelaar. De gegevens worden via een web-portal zichtbaar gemaakt voor de behandelaar.
    De REST API backend is geschreven in Java EE, maakt gebruik van het JAX-RS framework en volgt een 3-tier architectuur.
    Voor het realiseren van de cross-platform app is gekozen voor Xamarin.`,
    mainTechnologies: ["Xamarin", "Java"],
    secondaryTechnologies: ["PostgreSQL", "Jenkins", "JAX-RS", "JUnit", "Mockito", "JavaScript", "HTML"],
    date: "nov. 2017 - feb. 2018",
    type: "schoolgroup"
  },
  {
    title: "Formule 1 competitie informatiesysteem",
    shortDescription: "Ontwerp en ontwikkeling van een informatiesysteem voor Formule 1-competitiedata, waarin gebruikers voorspellingen kunnen doen voor races en punten ontvangen op basis van hun nauwkeurigheid. InfoSupport was opdrachtgever voor dit project.",
    detailedDescription: "Voor dit project is een volledig informatiesysteem ontwikkeld om Formule 1-competitiedata te beheren en voorspellingen van gebruikers te verwerken. Gebruikers konden voorspellingen doen over toekomstige grand prix’s en kregen automatisch punten toegekend afhankelijk van de juistheid van hun voorspellingen. De database is ontworpen volgens de FCO-IM methode en uitgewerkt in zowel een Conceptual als Physical Data Model met PowerDesigner. De implementatie is gerealiseerd in MS SQL Server 2016 en voorzien van een abstractielaag met stored procedures en views, waarmee een duidelijke scheiding tussen dataopslag en applicatielogica is bereikt.",
    mainTechnologies: ["MSSQL", "T-SQL", "FCO-IM"],
    secondaryTechnologies: [],
    date: "apr. 2018 - juni. 2018",
    type: "schoolgroup"
  },
  {
    title: "OOPD Tower Defense Game",
    shortDescription: "",
    detailedDescription: "",
    mainTechnologies: ["Java"],
    secondaryTechnologies: [],
    date: "",
    type: "schoolgroup"
  }
];
