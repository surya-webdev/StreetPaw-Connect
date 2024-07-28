import { supabase } from "./supabase";

// creating user

export async function createGuest({ user }) {
  console.log("supa");
  console.log(user);
  //

  const { data, error } = await supabase.from("guest").insert([user]);

  if (error) {
    console.error(error.message);
    throw new Error("Couln't add the user");
  }

  return data;
}
