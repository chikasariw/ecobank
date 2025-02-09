import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-eb-primary-tosca-800 to-eb-primary-green-600 bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default GradientText;
