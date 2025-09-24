// contexts/PendingActionsContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PendingAction {
    type: string;
    params: any;
}

interface PendingActionsContextType {
    pendingAction: PendingAction | null;
    setPendingAction: (action: PendingAction | null) => void;
    executePendingAction: (actionHandlers: Record<string, Function>) => void;
    clearPendingAction: () => void;
}

const PendingActionsContext = createContext<PendingActionsContextType | null>(null);

export function PendingActionsProvider({ children }: { children: ReactNode }) {
    const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);

    const executePendingAction = (actionHandlers: Record<string, Function>) => {
        if (pendingAction && actionHandlers[pendingAction.type]) {
            actionHandlers[pendingAction.type](pendingAction.params);
            setPendingAction(null);
        }
    };

    const clearPendingAction = () => {
        setPendingAction(null);
    };

    return (
        <PendingActionsContext.Provider value={{
            pendingAction,
            setPendingAction,
            executePendingAction,
            clearPendingAction,
        }}>
            {children}
        </PendingActionsContext.Provider>
    );
}

export function usePendingActions() {
    const context = useContext(PendingActionsContext);
    if (!context) {
        throw new Error('usePendingActions must be used within PendingActionsProvider');
    }
    return context;
}