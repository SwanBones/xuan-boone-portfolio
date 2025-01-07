
import subPageStyles from "/src/styles/subpages-styles.module.css";

type Props = {
	title: string;
	description: string;
	date: string;
	imageSrc?: string;
	rtl?: boolean;
};

export default function Education_SchoolSection(props: Props) {
	const { title, description, date, rtl } = props;

	return (
		<div
			className={subPageStyles.education}
			style={{ direction: rtl ? "rtl" : "ltr" }}
		>
			<h2>{title}</h2>

			<p>{description}</p>
			<h3>{date}</h3>
		</div>
	);
}
