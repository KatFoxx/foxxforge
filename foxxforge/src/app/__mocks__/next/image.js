// Simple mock for next/image to behave like a normal img in Jest tests
export default function Image({ src, alt, ...props }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} {...props} />;
}
