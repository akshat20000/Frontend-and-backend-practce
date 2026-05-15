import { useRef } from "react";

export default function FeedbackForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const feedback = feedbackRef.current?.value || "";

    console.log({
      name,
      feedback,
    });

    // optional: clear fields after submit
    if (nameRef.current) nameRef.current.value = "";
    if (feedbackRef.current) feedbackRef.current.value = "";
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Feedback</label>
          <textarea
            ref={feedbackRef}
            placeholder="Enter your feedback"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}