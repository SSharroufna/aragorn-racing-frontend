import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";

interface LayoutDisplayProps {
    layout: "grid" | "list";
    setLayout: (layout: "grid" | "list") => void;
    total: number;
}

const LayoutDisplay = ({ layout, setLayout }: LayoutDisplayProps) => {
    return (
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 w-full">
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                <Button
                    variant={layout === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLayout("grid")}
                    className="flex items-center gap-2"
                >
                    <LayoutGrid className="h-4 w-4" />
                    Grid
                </Button>
                <Button
                    variant={layout === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLayout("list")}
                    className="flex items-center gap-2"
                >
                    <List className="h-4 w-4" />
                    List
                </Button>
            </div>
        </div>
    );
};

export default LayoutDisplay;
