import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "vanderfulife",
  description: "Living our wonderful lives in a van",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-5xl font-bold underline text-center text-grey-800">
        vanderfulife
      </h1>
    </div>
  );
}
