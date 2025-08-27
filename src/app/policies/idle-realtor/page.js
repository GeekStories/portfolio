export default function PrivacyPolicy() {
  return (
    <main style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h1>Privacy Policy</h1>
      <p>
        This app does not intentionally collect any personal user data. However,
        it uses Unity as a development platform and is published on Google Play,
        which may collect certain information as part of their standard
        operations.
      </p>
      <h2>Third-Party Services</h2>
      <ul>
        <li>
          <strong>Unity:</strong> Unity may collect device information and usage
          statistics. Please refer to Unity's privacy policy for details.
        </li>
        <li>
          <strong>Google Play:</strong> Google Play may collect data as
          described in their privacy policy.
        </li>
      </ul>
      <h2>Contact</h2>
      <p>
        If you have any questions about this privacy policy, please{" "}
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href="https://damonpitkethley.com/contact"
        >
          {" "}
          contact me
        </a>
        .
      </p>
    </main>
  );
}
