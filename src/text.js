
const HR_MANAGER_TAG = "[HR_MANAGER_NAME]"
const COMPANY_NAME_TAG = "[COMPANY_NAME]"

const marketingText = `
Daria Dryha
181 Dundas St East
Toronto, ON, M5A 1Z4
dryhadaria@gmail.com
+1-647-870-0381

Dear [HR_MANAGER_NAME],

I am writing to express my keen interest in the marketing assistant position at [COMPANY_NAME]. With a passion for marketing strategies and a solid foundation in consumer behavior and psychological principles, I am confident in my ability to contribute to the success of your marketing team.

As a recent graduate with a Bachelor's degree in Psychology from Taras Shevchenko National University of Kyiv, I have developed a strong understanding of human behavior, motivation, and decision-making processes. My academic background has provided me with valuable insights into understanding consumers and their needs, allowing me to create effective marketing strategies that resonate with target audiences.

In addition to my educational background, I have practical experience as a marketing assistant at NAB College. In this role, I assisted in the development and execution of digital marketing campaigns, including social media management, content creation, and search engine optimization. I successfully increased brand engagement through the implementation of targeted social media campaigns and analyzed campaign performance using analytics tools to optimize marketing efforts. My experience as a marketing assistant has honed my skills in project coordination, data analysis, and effective communication with internal teams.

Thank you for considering my application. I look forward to the possibility of contributing to [COMPANY_NAME]'s marketing team and driving the growth of your brand.

Yours sincerely,
Daria Dryha
`

const hrText = `
Daria Dryha
181 Dundas St East
Toronto, ON, M5A 1Z4
dryhadaria@gmail.com
+1-647-870-0381

Dear [HR_MANAGER_NAME],

I am writing to express my keen interest in the HR Assistant position at [COMPANY_NAME]. With my strong passion for supporting HR functions and my ability to contribute to a positive employee experience, I am confident in my suitability for this role.

As an HR professional, I have gained valuable experience in various administrative tasks, including employee record maintenance, recruitment assistance, and HR documentation management. My exceptional organizational and communication skills enable me to effectively multitask and meet deadlines in fast-paced environments. I am well-versed in HR policies, procedures, and compliance, ensuring confidentiality and adherence to legal requirements.

Throughout my career, I have demonstrated my ability to contribute to the success of HR teams and enhance the overall employee experience. For example, I have successfully managed employee records and streamlined record-keeping processes, resulting in improved accessibility and accuracy of information. Additionally, I have provided valuable support in recruitment processes, assisting in candidate screening, scheduling interviews, and facilitating smooth onboarding experiences.

I am impressed by [COMPANY_NAME]'s work culture, which aligns closely with my own professional aspirations. I am eager to join a dynamic team where I can continue learning and growing in the field of HR. By leveraging my skills and passion, I am confident in my ability to contribute to the success of [COMPANY_NAME] and make a positive impact on its employees.

Thank you for considering my application. I have attached my resume for your review, which provides further details on my qualifications and achievements. I would welcome the opportunity to discuss how my skills and experience align with [COMPANY_NAME]'s HR objectives. I am available at your convenience for an interview, either in person or via phone or video call.

Sincerely,
Daria Dryha
`

export const getHRText = (hrManager, companyName) => {
    return hrText.replaceAll(HR_MANAGER_TAG, hrManager).replaceAll(COMPANY_NAME_TAG, companyName)
}

export const getMarketingText = (hrManager, companyName) => {
    // return marketingText.replace(HR_MANAGER_TAG, hrManager).replace(COMPANY_NAME_TAG, companyName)
    return marketingText.replaceAll(HR_MANAGER_TAG, hrManager).replaceAll(COMPANY_NAME_TAG, companyName)

}