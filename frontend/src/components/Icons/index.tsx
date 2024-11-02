import SparkleIcon from "./Sparkle";

type IconsNames = "sparkle" | "heart";

export interface IconProps {
    color?: string;
    name: IconsNames;
    size?: string;
}
export default function Icon({
    color = 'var(--neutral-400)',
    name,
    size = '1.5rem'
}: IconProps) {
    switch (name) {
        case "sparkle":
            return <SparkleIcon color={color} size={size} name={name} />;
        case "heart":
            return <></>;
    }

    return <></>
}