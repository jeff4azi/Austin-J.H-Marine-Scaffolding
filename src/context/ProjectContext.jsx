// context/ProjectsContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      let { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("time", { ascending: false });

      if (error) console.error("Error fetching projects:", error);
      else setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
