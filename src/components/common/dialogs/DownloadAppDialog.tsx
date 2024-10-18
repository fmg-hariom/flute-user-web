import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

type Props = {
  trigger: React.ReactNode;
};

const DownloadAppDialog = (props: Props) => {
  return (
    <Dialog key={"1"}>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>

      <DialogContent className=" w-[90%] sm:w-full">
        <div className="flex flex-col items-center justify-between">
          <br />
          <p className="text-white text-center text-sm font-medium">
            Experience the personal touch of face-to-face interaction with your
            experts, coaches, advisors, therapists and listeners. This feature
            is available exclusively on the Flute mobile app.
          </p>
          <br />
          <p className="text-white text-center text-sm font-medium">
            To talk with our Astrologers, download our App{" "}
          </p>
          <br />
          <div className="flex items-center justify-around">
            <img src="/images/icons/play-store.png" className="w-[40%]" />
            <img src="/images/icons/app-store.png" className="w-[40%]" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadAppDialog;
