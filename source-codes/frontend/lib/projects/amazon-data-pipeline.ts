import type { Project } from "../data";

const amazonDataPipeline: Project = {
  slug: "amazon-data-pipeline",
  title: "End-to-End Data Engineering Pipeline for Amazon Product & Review Data",
  category: "Data",
  org: "Team project",
  year: "2023",
  role: "Data Engineer & BI Developer",
  summary:
    "An end-to-end ETL pipeline that scrapes and processes Amazon product and review data for business intelligence — sentiment analysis, product- and user-based recommendation systems, and exploratory analytics, all served through a Streamlit dashboard.",
  stack: ["Python", "Pandas", "Apache Airflow", "Docker", "PostgreSQL", "scikit-learn", "Streamlit"],
  highlights: [
    "Built a team ETL pipeline combining a static Kaggle dataset with live Amazon product and review data scraped via the Oxylabs e-commerce API, in November 2023.",
    "Orchestrated extract/transform/load stages as an Apache Airflow DAG running in Docker, loading cleaned and validated data into a PostgreSQL warehouse.",
    "Built a sentiment analysis model using TF-IDF text vectorization to classify reviews as positive, negative, or neutral from their rating.",
    "Built product-based (cosine similarity) and user-based (SVD, RMSE 1.2139) recommendation systems, then shipped a Streamlit dashboard exposing all three BI tools.",
  ],
  link: "https://amazon-bi.streamlit.app/",
  cover: "/assets/projects/amazon-data-pipeline/cover.png",
  gallery: [
    "/assets/projects/amazon-data-pipeline/shot-1.png",
    "/assets/projects/amazon-data-pipeline/shot-2.png",
    "/assets/projects/amazon-data-pipeline/shot-3.png",
    "/assets/projects/amazon-data-pipeline/shot-4.png",
    "/assets/projects/amazon-data-pipeline/shot-5.png",
  ],
  goal: "Build an end-to-end data pipeline for Amazon product and review data whose output can power business analysis, recommendation systems, and sentiment models.",
  problem:
    "Online shopping platforms like Amazon generate rapidly growing volumes of product and review data, but that data arrives raw and split across sources — a static Kaggle export and live web-scraped listings — making it unusable for sentiment analysis, business analytics, or recommendation systems without a reliable pipeline to extract, clean, validate, and centralize it.",
  features: [
    "Automated ETL orchestration via Apache Airflow DAGs",
    "Sentiment analysis on product reviews (positive / neutral / negative)",
    "Product-based recommendation system using cosine similarity",
    "User-based recommendation system using SVD collaborative filtering",
    "Product and review analytics dashboards",
  ],
  process: [
    "Extracted product IDs from a static Kaggle dataset, then scraped live product and review data from Amazon via the Oxylabs e-commerce API across its product and review endpoints.",
    "Cleaned and validated both datasets — handling null values, splitting review location/date fields, and flattening nested product category JSON into a readable top-down path — before loading into a PostgreSQL data warehouse.",
    "Orchestrated the full extract-transform-load flow as an Airflow DAG running in Docker, then built the sentiment and recommendation models on the warehoused data and shipped them as an interactive Streamlit dashboard.",
  ],
};

export default amazonDataPipeline;
