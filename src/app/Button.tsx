// create Button component that receives variant, size, and children as props and returns a button element

type ButtonProps = {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  text: React.ReactNode;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="bg-primary-base text-white py-2 px-4 rounded w-full"
      type="button"
    >
      {text}
    </button>
  )
}