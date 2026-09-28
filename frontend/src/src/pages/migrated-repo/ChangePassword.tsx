import React, { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Helper – retrieve the logged‑in user object from sessionStorage.
 * The original JSP checks `${empty userObj}` and redirects to the login page.
 * In the legacy app the user object is stored in the HTTP session; here we
 * emulate that by reading a JSON string from sessionStorage under the key
 * "userObj". Adjust this logic to match the actual client‑side auth mechanism
 * used in the project (e.g., context, cookie, etc.).
 */
function getUserFromSession(): { id: number } | null {
  const raw = sessionStorage.getItem("userObj");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * ChangePassword – React migration of `change_password.jsp`.
 *
 * Functional fidelity:
 *   • Redirects to `/user_login` when no user is present (mirrors `<c:redirect>`).
 *   • Submits `newPassword`, `oldPassword` and hidden `userId` to the legacy
 *     endpoint `userChangePassword` using `application/x-www-form-urlencoded`.
 *   • Shows success or error messages returned by the backend (originally
 *     stored in session attributes `successMsg` / `errorMsg`).
 *
 * UI modernization (>80%):
 *   • Uses the modern CSS design tokens (`.modern-container`, `.modern-card`,
 *     `.form-group`, `.form-label`, `.form-control`, `.btn`, `.btn-primary`,
 *     `.alert-box`, `.badge`).
 *   • Accessible markup (labels linked to inputs, proper ARIA roles).
 */
const ChangePassword: React.FC = () => {
  const navigate = useNavigate();

  // ----- Auth check (mirrors <c:if test="${empty userObj}">) -----
  const [user, setUser] = useState<{ id: number } | null>(null);
  useEffect(() => {
    const loggedUser = getUserFromSession();
    if (!loggedUser) {
      // No user → redirect to login page
      navigate("/user_login");
    } else {
      setUser(loggedUser);
    }
  }, [navigate]);

  // ----- Form state -----
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  // ----- Message state (mirrors session messages) -----
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // ----- Submit handler -----
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!user) return; // safety guard

    const params = new URLSearchParams();
    params.append("newPassword", newPassword);
    params.append("oldPassword", oldPassword);
    params.append("userId", String(user.id));

    try {
      const response = await fetch("/userChangePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        credentials: "include", // preserve session cookies
      });

      // The legacy endpoint may return plain text or JSON.
      // We attempt JSON first; fallback to plain text.
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await response.json();
        if (data.successMsg) {
          setSuccessMsg(data.successMsg);
          setErrorMsg(null);
        } else if (data.errorMsg) {
          setErrorMsg(data.errorMsg);
          setSuccessMsg(null);
        } else {
          // Unknown payload – treat as success with generic message
          setSuccessMsg("Password changed successfully.");
          setErrorMsg(null);
        }
      } else {
        const text = await response.text();
        // Simple heuristic: look for keywords
        if (text.toLowerCase().includes("success")) {
          setSuccessMsg(text);
          setErrorMsg(null);
        } else {
          setErrorMsg(text);
          setSuccessMsg(null);
        }
      }
    } catch (err) {
      console.error("Change password request failed:", err);
      setErrorMsg("An unexpected error occurred. Please try again.");
      setSuccessMsg(null);
    }
  };

  // ----- Render -----
  // If user data hasn't been resolved yet, render nothing (redirect will happen)
  if (!user) return null;

  return (
    <div className="modern-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="modern-card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="fs-3 text-center mb-4">Change Password</h2>

        {/* Success / Error alerts */}
        {successMsg && (
          <div className="alert-box alert-success mb-3" role="alert">
            <span className="badge bg-success me-2">Success</span>
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="alert-box alert-danger mb-3" role="alert">
            <span className="badge bg-danger me-2">Error</span>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="form-group mb-3">
            <label htmlFor="newPassword" className="form-label">
              Enter New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              className="form-control"
              required
              value={newPassword}
              onChange={(e) = /> setNewPassword(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="oldPassword" className="form-label">
              Enter Old Password
            </label>
            <input
              id="oldPassword"
              name="oldPassword"
              type="password"
              placeholder="Enter old password"
              className="form-control"
              required
              value={oldPassword}
              onChange={(e) = /> setOldPassword(e.target.value)}
            />
          </div>

          {/* Hidden userId – mirrors the JSP hidden input */}
          <input type="hidden" name="userId" value={user.id} />

          <button type="submit" className="btn btn-primary w-100">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;