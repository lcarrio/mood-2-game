// Refresh the page
"use client";
import { useRouter } from "next/navigation";
const router = useRouter();
export default function RefreshPage() {
  router.refresh();
}
