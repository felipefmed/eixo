
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ONGSearchBarProps = {
  cidade: string;
  setCidade: (cidade: string) => void;
  onSearch?: () => void;
};

const ONGSearchBar: React.FC<ONGSearchBarProps> = ({
  cidade,
  setCidade,
  onSearch,
}) => {
  return (
    <div className="mt-10 bg-white rounded-full shadow-xl flex overflow-hidden max-w-xl">
      <Input
        type="text"
        placeholder="Em que cidade você está?"
        className="flex-grow border-0 focus-visible:ring-0 text-base px-6 py-6 h-auto"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <Button
        className="bg-white hover:bg-gray-100 text-eixo-black rounded-full px-6"
        onClick={onSearch}
        type="button"
      >
        <Search size={24} />
      </Button>
    </div>
  );
};

export default ONGSearchBar;
