
import './UserAgreement.css'

function UserAgreement(props) {

    function clickHandler() {
        props.setPopup(false)
    }

    return (props.trigger) ? (
        <div className="popup">
            <div>
                <div className="popup-inner">
                    <text>Welcome to our service! Please read this User Agreement carefully before using our service. By using our service, you agree to be bound by the terms and conditions of this agreement. If you do not agree to the terms and conditions of this agreement, do not use our service.

                        Definitions
                        "Service" refers to the website, application or any other platform provided by us.
                        "User" refers to any person who uses the Service.
                        "Content" refers to any text, image, video, audio, or any other material that is posted or shared through the Service.
                        "Intellectual Property" refers to any trademarks, copyrights, patents, trade secrets, or any other proprietary rights.
                        Use of Service
                        You must be 18 years of age or older to use the Service. You agree to use the Service only for lawful purposes and in compliance with all applicable laws and regulations. You agree not to use the Service to:
                        Upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
                        Upload, post, or transmit any content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party.
                        Impersonate any person or entity or falsely represent your affiliation with any person or entity.
                        Intentionally or unintentionally violate any applicable local, state, national, or international law or regulation.
                        Intellectual Property
                        All Intellectual Property rights in the Service and its Content belong to us or our licensors. You agree not to reproduce, distribute, modify, or create derivative works based on the Service or its Content without our prior written consent.

                        User Content
                        You retain all ownership rights in any content that you post or share through the Service. By posting or sharing any content through the Service, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, store, display, reproduce, modify, distribute, and create derivative works based on your content in connection with the Service.

                        Termination
                        We reserve the right to terminate your access to the Service at any time for any reason without notice.

                        Disclaimer of Warranties
                        The Service is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the Service or its Content, including, but not limited to, the accuracy, completeness, reliability, or availability of the Service or its Content.

                        Limitation of Liability
                        In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service, whether based on contract, tort, strict liability, or any other legal theory, even if we have been advised of the possibility of such damages.

                        Indemnification
                        You agree to indemnify, defend, and hold us harmless from any claims, damages, liabilities, and expenses, including reasonable attorneys' fees, arising out of or in connection with your use of the Service or any Content you post or share through the Service.

                        Governing Law and Jurisdiction
                        This agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate. Any dispute arising out of or in connection with this agreement shall be subject to the exclusive jurisdiction of the courts of that jurisdiction.

                        Entire Agreement
                        This agreement constitutes the entire agreement between you and us regarding the use of the Service and supersedes all prior agreements and understandings, whether written or oral.

                        By using the Service, you acknowledge that you have read, understood, and agree to be bound by this User Agreement.</text>
                    <br></br>
                    <br></br>
                    <button onClick={clickHandler}>Back</button>
                </div>
            </div>
        </div>
    ) : '';
}
export default UserAgreement