"use client";

import * as React from "react";
import { Button } from "@/features/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/features/components/ui/dialog";
import { useActionGuard } from "@/features/hooks/useActionGuard";
import { usePendingActions } from "@/app/contexts/PendingActionsContext";

export default function BuyAllDialog() {
    const [open, setOpen] = React.useState(false);
    const { executeWithAuth, isAuthenticated } = useActionGuard();
    const { executePendingAction } = usePendingActions();

    // Define the buy all action
    const buyAllRaces = React.useCallback((params = {}) => {
        console.log("Executing buy all races action with params:", params);

        // Your actual purchase logic here
        // This could be an API call, state update, etc.
        alert("Successfully purchased all races!");

        // Close dialog after purchase
        setOpen(false);

        // You can add more logic here like:
        // - API call to process purchase
        // - Update local state
        // - Show success message
        // - Redirect to confirmation page

    }, []);

    // Execute pending action when user becomes authenticated
    React.useEffect(() => {
        if (isAuthenticated) {
            executePendingAction({
                buyAllRaces: buyAllRaces,
                // Add other action handlers here if needed
            });
        }
    }, [isAuthenticated, executePendingAction, buyAllRaces]);

    const handleBuyAllClick = () => {
        if (isAuthenticated) {
            // User is logged in, show confirmation dialog
            setOpen(true);
        } else {
            // User is not logged in, redirect to login with pending action
            executeWithAuth(buyAllRaces, {
                timestamp: Date.now(),
                source: 'buy_all_dialog'
            });
        }
    };

    const handleConfirmPurchase = () => {
        // Execute the purchase action
        buyAllRaces({ confirmed: true });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={handleBuyAllClick}>
                    Buy Full Card
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirm Purchase</DialogTitle>
                    <DialogDescription>
                        Youre about to buy all available races. Are you sure you want to continue?
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmPurchase}>
                        Confirm Purchase
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}