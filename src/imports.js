// React and Hooks
import { useCallback, useEffect, useState } from "react";

// Libraries
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

// Components
import { RecentSearches } from "./components/RecentSearches";
import { SearchBar } from "./components/SearchBar";
import { ThemeToggle } from "./components/ThemeToggle";
import { WeatherCard } from "./components/WeatherCard";

// UI Elements
import Iridescence from "../ui/Iridescence/Iridescence";
import Magnet from "../ui/Magnet/Magnet";
import FadeContent from "../ui/FadeContent/FadeContent";
import Button from "../ui/buttonOp";

// Export all
export {
  useCallback,
  useEffect,
  useState,
  axios,
  motion,
  AnimatePresence,
  AlertCircle,
  RecentSearches,
  SearchBar,
  ThemeToggle,
  WeatherCard,
  Iridescence,
  Magnet,
  FadeContent,
  Button,
};