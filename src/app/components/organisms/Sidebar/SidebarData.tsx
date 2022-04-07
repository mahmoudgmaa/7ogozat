import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { useParams } from "react-router-dom";

export const SidebarData = [
  {
    title: "Business Info",
    description: "Explain to your customers more about you in both Languages",
    path: "business_info",
  },
  {
    title: "Categories",
    description: "What type of work do you provide to your clients?",
    path: "categories",
  },
  {
    title: "Staff",
    clickedTitle: "Staff/Resources",
    description: "What are your resources?",
    path: "business_info",
  },
  {
    title: "Services",
    description: "Explain to your customers more about you in both Languages",
    path: "services",
  },
  {
    title: "Business Policy",
    description: "Create schedule for each week",
    path: "",
  },
  {
    title: "Schedule",
    description:
      "Schedule for a client, or send them the link to schedule for themselves",
    path: "",
  },
  {
    title: "scheduling_history",
    path: "scheduling_history",
  },
];
