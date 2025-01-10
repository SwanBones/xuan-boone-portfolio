import { ReactElement } from "react";
import subPageStyles from "/src/styles/subpages-styles.module.css";

type Props = {
	title: string;
	h3: string;
	description: string;
	desc2: string;
	backgroundImg: string;
	imageSrc?: string;
	rtl?: boolean;
	reactComponent?: ReactElement;
};

export default function projectSection(props: Props) {
	const { title, h3, description, desc2, rtl, backgroundImg, reactComponent } =
		props;

	return (
		<div
			className={subPageStyles.project}
			style={{
				textAlign: rtl ? "right" : "left",
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			<h2>{title}</h2>
			<h3>{h3}</h3>
			<p>{description}</p>
			<p>{desc2}</p>
			{reactComponent}
		</div>
	);
}
