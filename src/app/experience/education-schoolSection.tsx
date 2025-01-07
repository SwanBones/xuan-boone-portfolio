
import subPageStyles from "/src/styles/subpages-styles.module.css";

type Props = {
	title: string;
	jobPosition: string;
	description: string;
	date: string;
	imageSrc?: string;
	rtl?: boolean;
};

export default function Experience_CompanySection(props: Props) {
	const { title, jobPosition, description, date, rtl } = props;

	return (
		<div
			className={subPageStyles.education}
			style={{ direction: rtl ? "rtl" : "ltr" }}
		>
			<h2>{title}</h2>
			<h3>{jobPosition}</h3>
			<p>{description}</p>
			<p>{date}</p>
		</div>
	);
}
