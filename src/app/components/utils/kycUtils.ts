export const getStatusColor = (status: string) => {
  if (status === "PASSED" || status === "READY") {
    return {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      dot: "bg-green-500",
    };
  }
  return {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    dot: "bg-red-500",
  };
};

export const formatDate = (date: string | null) => {
  if (!date) return "";
  return new Date(date).toLocaleString();
};

export const getDisplayName = (
  checkKey: string,
  config?: typeof displayConfig.tinVerification
) => {
  if (config?.displayName) {
    return config.displayName;
  }

  return checkKey
    .split("_")
    .map((word) =>
      word
        .replace(/([A-Z])/g, " $1")
        .split(" ")
        .map(
          (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
        )
        .join(" ")
    )
    .join(" ")
    .trim();
}; 