import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import React from "react";

const DateInput = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="dateOfBirth"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date</FormLabel>
          <FormControl>
            <Input
              placeholder={t("dateOfBirth.placeholder")}
              className="px-4 bg-white text-body-md py-2.5 h-auto focus-visible:ring-0 focus-visible:ring-offset-1 border-[#e2e2e2]"
              {...field}
            />
          </FormControl>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0001 5.51724H0.655273V14.3448C0.655273 14.784 0.829617 15.205 1.14024 15.515C1.45031 15.8257 1.87127 16 2.31045 16C4.80424 16 10.8511 16 13.3449 16C13.7841 16 14.2051 15.8257 14.5151 15.515C14.8258 15.205 15.0001 14.784 15.0001 14.3448V5.51724ZM0.655273 4.41379H15.0001V3.31034C15.0001 2.87117 14.8258 2.45021 14.5151 2.14014C14.2051 1.82952 13.7841 1.65517 13.3449 1.65517H12.7932V0.551724C12.7932 0.247172 12.546 0 12.2415 0C11.9369 0 11.6898 0.247172 11.6898 0.551724V1.65517H8.37941V0.551724C8.37941 0.247172 8.13224 0 7.82769 0C7.52314 0 7.27596 0.247172 7.27596 0.551724V1.65517H3.96562V0.551724C3.96562 0.247172 3.71845 0 3.41389 0C3.10934 0 2.86217 0.247172 2.86217 0.551724V1.65517H2.31045C1.87127 1.65517 1.45031 1.82952 1.14024 2.14014C0.829617 2.45021 0.655273 2.87117 0.655273 3.31034V4.41379Z"
                  fill="#060606"
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date);
                  setIsCalendarOpen(false);
                }}
                disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DateInput;
