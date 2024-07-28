import { supabase } from "./supabase";

// creating user

export async function createGuest(user) {
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

export async function guestByEmail(email) {
  //
  const { data: guest, error } = await supabase
    .from("guest")
    .select("*")
    .eq("email", email);

  if (error) {
    console.error(error.message);
    throw new Error("Couln't add the user");
  }

  return guest;
}

export async function getIssues() {
  //
  //
  const { data: issues, error } = await supabase.from("issues").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Couln't add the user");
  }

  return issues;
}
