import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

test("Cero likes por defecto", () => {
render(<Like />);
expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Incrementar likes cuando se presiona el botón Like", () => {
render(<Like />);
const likeButton = screen.getByText("Like");
fireEvent.click(likeButton);
expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

test("Decrementar likes cuando se presiona el botón Dislike", () => {
render(<Like />);
const dislikeButton = screen.getByText("Dislike");
fireEvent.click(dislikeButton);
expect(screen.getByText("Likes: -1")).toBeInTheDocument(); 
});
