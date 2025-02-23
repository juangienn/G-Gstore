import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { paymentMethods, paymentDetails } from "@shared/schema";
import { InfoIcon } from "lucide-react";

interface PaymentMethodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function PaymentMethodSelector({ value, onChange }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={paymentMethods.GCASH} id="gcash" />
            <Label htmlFor="gcash">G-Cash</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={paymentMethods.BANK_TRANSFER} id="bank" />
            <Label htmlFor="bank">Bank Transfer</Label>
          </div>
        </div>
      </RadioGroup>

      {value && (
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            {paymentDetails[value as keyof typeof paymentDetails].instructions}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
