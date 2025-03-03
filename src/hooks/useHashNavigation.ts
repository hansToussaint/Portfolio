import { useState, useEffect } from "react";

export interface Section {
  id: string;
  label?: string;
}

const useHashNavigation = (sections: Section[]) => {
  // Initialise avec la première section par défaut
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  // Lors du montage, si un hash est présent dans l'URL, scroll vers cette section
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Retire le '#' du hash
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(sectionId);
      }
    }
  }, []);

  // Écoute du scroll pour mettre à jour l'état activeSection (sans mettre à jour l'URL)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Fonction pour scroll vers une section et mettre à jour le hash dans l'URL
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${sectionId}`);
      setActiveSection(sectionId);
    }
  };

  return { activeSection, scrollToSection };
};

export default useHashNavigation;
