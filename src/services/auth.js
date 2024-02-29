export function getCurrentUser() {
  try {
    const user = localStorage.getItem("pv_user");
    if (!user) return null;
    return JSON.parse(user);
  } catch (ex) {
    return null;
  }
}

export async function getVendorID() {
  try {
    const user = await getCurrentUser();
    if (!user) return null;
    return user.vendor_id;
  } catch (ex) {
    return null;
  }
}

export function getTokensUage() {
  try {
    let user = localStorage.getItem("pv_user");
    if (!user) return null;
    user = JSON.parse(user);
    return user.openai_usage;
  } catch (ex) {
    return null;
  }
}
