type Fn = () => void;
type Theme = "LIGHT" | "DARK";

type AppLink = "home" | "about" | "stores";
type SocialType = "twitter" | "instagram" | "github";
interface LinkType<T> {
  name: T;
  path: string;
}
