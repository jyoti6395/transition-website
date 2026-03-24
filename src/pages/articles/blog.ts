// blogData.ts
import blog1Img from "@/assets/article1.png";
import blog2Img from "@/assets/article2.png";
import blog3Img from "@/assets/article3.png";
import blog4Img from "@/assets/article4.png";

export interface Category {
  name: string;
  slug: string;
  count: number;
}

export interface Article {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  content: string[]; // Changed to array for multiple paragraphs
  author: string;
  date: string;
  image: string;
}

export const blogCategories: Category[] = [
  { name: "Meal Details", slug: "meal-details", count: 18 },
  { name: "AI Assistant", slug: "ai-assistant", count: 10 },
  { name: "Grocery List", slug: "grocery-list", count: 15 },
  { name: "Meal Planner", slug: "meal-planner", count: 11 }
];

export const articles: Article[] = [
  {
    id: 1,
    slug: "trusted-by-doctor-professionals",
    category: "ai-assistant",
    title: "Trusted by doctor Professionals",
    description: "Discover how intelligent recommendations and real-time insights are helping people make better food choices.",
    content: [
      "This is the full detailed story of how doctors are using AI to transform patient care. Intelligent recommendations are no longer just a luxury; they are a necessity in modern health management.",
      "By leveraging machine learning, 'The Transition' app identifies patterns in dietary habits that the human eye might miss."
    ],
    author: "Admin",
    date: "March 21, 2026",
    image: blog1Img,
  },
  {
    id: 2,
    slug: "insights-for-smarter-healthier-living",
    category: "meal-details",
    title: "Insights for Smarter, Healthier Living",
    description: "Explore expert tips, AI-driven insights, and practical guides to help you eat better and achieve your health goals.",
    content: [
      "Smarter living starts with data. By understanding the chemical composition of your meals, you can adjust your caloric intake to match your energy expenditure perfectly.",
      "Our latest research shows that plant-based transitions are 40% more successful when guided by automated meal planners."
    ],
    author: "Admin",
    date: "March 22, 2026",
    image: blog2Img,
  },
  {
    id: 3,
    slug: "simple-ways-to-improve-daily-nutrition",
    category: "grocery-list",
    title: "Simple Ways to Improve Your Daily Nutrition",
    description: "Small changes in your daily meals can lead to big results. Learn how to build better eating habits effortlessly.",
    content: ["Content for nutrition..."],
    author: "Admin",
    date: "March 23, 2026",
    image: blog3Img,
  },
  {
    id: 4,
    slug: "role-of-ai-in-personalized-nutrition",
    category: "meal-planner",
    title: "The Role of AI in Personalized Nutrition",
    description: "Explore how AI analyzes your habits and provides recommendations tailored to your lifestyle.",
    content: ["Content for AI role..."],
    author: "Admin",
    date: "March 24, 2026",
    image: blog4Img,
  }
];

export const recentPosts: Article[] = articles.slice(0, 3);