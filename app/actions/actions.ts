"use server";

export async function signupForBeta(
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  const email = formData.get("emailid");
  if (!email) {
    return {
      success: false,
      message: "Email is required.",
    };
  }

  const data = { email };
  try {
    const response = await fetch("https://gate.yoliday.in/emailEarlyAccess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.log(response);
      return {
        success: false,
        message: "Something went wrong. Please try again!",
      };
    }

    return { success: true, message: "sccess" };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong. Please try again!",
    };
  }
}
