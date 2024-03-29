import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardWithForm({ RefineInput }: { RefineInput: string }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Task</CardTitle>
        <CardDescription>{RefineInput}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your task" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="desc">Goal 1</Label>
              <Input id="desc" placeholder="Step 1" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="desc">Goal 2</Label>
              <Input id="desc" placeholder="Step 2" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive">Skip</Button>
        <Button>Next</Button>
      </CardFooter>
    </Card>
  );
}
