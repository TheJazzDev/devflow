import { auth, signOut } from "@/auth";
import { Button } from "@/src/components/ui/button";
import ROUTES from "@/src/constants/routes";
import React from "react";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <div className="text-white text-7xl">Home</div>

      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
        className="px-10 pt-[100px]">
        <Button>Logout</Button>
      </form>
    </>
  );
};

export default Home;
