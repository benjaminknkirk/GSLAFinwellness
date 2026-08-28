export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="12" fill="currentColor" />
      <path
        d="M24.2 12.5c-6.4 0-10.7 4.1-10.7 10.3 0 6.4 4.5 10.7 11.2 10.7 3.2 0 6-.9 8.1-2.5l-1.8-3.2c-1.6 1.1-3.6 1.8-5.9 1.8-3.8 0-6.4-2.3-6.8-6h15.4c.2-.7.3-1.5.3-2.3 0-5.5-3.6-8.8-9.8-8.8Zm-.3 3.6c3.2 0 5.1 1.8 5.4 4.6H18.8c.5-2.8 2.5-4.6 5.1-4.6Z"
        fill="#C9A227"
      />
      <circle cx="35.4" cy="34.6" r="3.1" fill="#C9A227" />
    </svg>
  );
}
