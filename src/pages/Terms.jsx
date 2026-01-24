import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">SELFCRUZ – TERMS OF SERVICE</h1>
                    
                    
                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 mb-8 text-center font-semibold">
                            Last Updated: 24 January 2026
                        </p>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. DEFINITIONS</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Platform</strong> refers to the SelfCruz website, mobile application, and related services.</li>
                                <li><strong>SelfCruz</strong> refers to the technology platform acting as an intermediary.</li>
                                <li><strong>User</strong> refers to any individual booking a self-drive vehicle through the Platform.</li>
                                <li><strong>Rental Partner</strong> refers to licensed vehicle rental operators listing vehicles on the Platform.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. PLATFORM ROLE & DISCLAIMER</h2>
                            <p className="text-gray-600 mb-4">
                                SelfCruz operates solely as a technology-enabled marketplace facilitating the discovery, booking, and payment of self-drive vehicles offered by independent, licensed Rental Partners.
                            </p>
                            <p className="font-semibold text-gray-700 mb-2">SelfCruz does not:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Own, lease, insure, maintain, garage, or control any vehicle</li>
                                <li>Act as a transport operator, taxi service, or rent-a-cab provider</li>
                                <li>Provide driving, chauffeur, or transportation services</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                All vehicles and rental services are provided exclusively by Rental Partners.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. ELIGIBILITY TO USE THE PLATFORM</h2>
                            <p className="text-gray-600 mb-4">To use SelfCruz, a User must:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Be 18 years or older</li>
                                <li>Hold a valid driving licence recognized in India</li>
                                <li>Provide accurate identity, contact, and payment information</li>
                                <li>Comply with all applicable Goa traffic, tourism, coastal, and local laws</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                SelfCruz reserves the right to deny or suspend access without prior notice where risk, fraud, or non-compliance is detected.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. BOOKINGS & PAYMENTS</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>All bookings are confirmed digitally through the Platform</li>
                                <li>Prices displayed include:
                                    <ul className="list-circle list-inside ml-4 mt-2">
                                        <li>Rental Partner charges</li>
                                        <li>Applicable taxes</li>
                                        <li>SelfCruz platform service fees</li>
                                    </ul>
                                </li>
                                <li>Security deposits, if applicable, are determined and managed solely by Rental Partners</li>
                                <li>SelfCruz is not a custodian of security deposits unless explicitly stated.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. USER OBLIGATIONS</h2>
                            <p className="text-gray-600 mb-4">Users are solely responsible for:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Lawful use of the vehicle</li>
                                <li>Traffic violations, parking fines, tolls, and penalties</li>
                                <li>Alcohol, narcotics, or prohibited substance violations</li>
                                <li>Damage, misuse, negligence, or illegal activities</li>
                                <li>Violations in restricted, coastal, forest, or regulated zones</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                Any loss or liability arising from User conduct shall not be attributed to SelfCruz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. CANCELLATION & REFUND POLICY</h2>
                            
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">6.1 User Cancellations</h3>
                            <p className="text-gray-600 mb-2">Refunds depend on:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Time remaining before trip start</li>
                                <li>Rental Partner's cancellation policy</li>
                            </ul>
                            <p className="text-gray-600 mt-2">
                                Platform service fees may be non-refundable.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">6.2 Rental Partner Cancellations</h3>
                            <p className="text-gray-600 mb-2">If a Rental Partner cancels a confirmed booking:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>The User shall receive a full refund</li>
                                <li>The Partner may be penalized, deprioritized, or delisted</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">6.3 Force Majeure</h3>
                            <p className="text-gray-600 mb-2">No party shall be liable for delays or failures due to:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Natural disasters</li>
                                <li>Government restrictions</li>
                                <li>Weather conditions (including monsoons)</li>
                                <li>Strikes, curfews, or network outages</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. INSURANCE & DAMAGE POLICY</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Vehicle insurance is provided solely by Rental Partners</li>
                                <li>Users must inspect vehicles before acceptance</li>
                                <li>Damage or insurance disputes are resolved directly between User and Rental Partner</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                SelfCruz acts only as a facilitation and communication platform and does not adjudicate claims.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. LIMITATION OF LIABILITY</h2>
                            <p className="text-gray-600 mb-4">To the maximum extent permitted by law:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>SelfCruz shall not be liable for accidents, injuries, death, theft, loss of property, or vehicle condition</li>
                                <li>SelfCruz is not responsible for acts or omissions of Rental Partners or Users</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                If liability is imposed, it shall be limited strictly to the platform service fee paid by the User for the booking in question.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. RENTAL PARTNER TERMS </h2>
                            <p className="text-gray-600 mb-4">Rental Partners:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Operate as independent businesses</li>
                                <li>Must maintain valid:
                                    <ul className="list-circle list-inside ml-4 mt-2">
                                        <li>Vehicle registration</li>
                                        <li>Insurance</li>
                                        <li>Fitness certificates</li>
                                        <li>Licences and permits as per Goa RTO norms</li>
                                    </ul>
                                </li>
                                <li>Are fully responsible for regulatory, tax, and operational compliance</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                Rental Partners agree to indemnify and hold SelfCruz harmless from all claims, penalties, losses, and legal actions arising from vehicle use or operations.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. PRIVACY POLICY</h2>
                            
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">10.1 Data Collected</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Name, phone number, email address</li>
                                <li>Driving licence metadata</li>
                                <li>Booking and transaction data</li>
                                <li>Device and usage analytics</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">10.2 Use of Data</h3>
                            <p className="text-gray-600 mb-2">Data is used strictly for:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Booking facilitation</li>
                                <li>Identity verification</li>
                                <li>Fraud prevention</li>
                                <li>Platform security and optimization</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">10.3 Data Sharing</h3>
                            <p className="text-gray-600 mb-2">Data may be shared with:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Rental Partners (booking-related only)</li>
                                <li>Payment gateways</li>
                                <li>Government authorities when legally required</li>
                            </ul>
                            <p className="text-gray-600 mt-2">
                                SelfCruz does not sell personal data.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">11. ACCOUNT SUSPENSION & TERMINATION</h2>
                            <p className="text-gray-600 mb-4">SelfCruz may suspend or terminate accounts for:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Fraud or misrepresentation</li>
                                <li>Submission of false documents</li>
                                <li>Abuse of the Platform</li>
                                <li>Regulatory or safety concerns</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                Such action may be taken without prior notice.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">12. GOVERNING LAW & DISPUTE RESOLUTION</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Governing law: Laws of India</li>
                                <li>Exclusive jurisdiction: Courts of Goa</li>
                                <li>Disputes may be resolved through arbitration under the Arbitration & Conciliation Act, 1996</li>
                                <li>Seat of arbitration: Goa</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">13. POLICY UPDATES</h2>
                            <p className="text-gray-600">
                                SelfCruz reserves the right to modify these Terms at any time. Continued use of the Platform constitutes acceptance of updated terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">14. GRIEVANCE REDRESSAL</h2>
                            <p className="text-gray-600 mb-4">
                                As required under IT Rules, 2021:
                            </p>
                            <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
                                <p className="text-gray-600 font-semibold">Grievance Officer</p>
                                <p className="text-gray-600">SelfCruz – Legal & Compliance</p>
                                <p className="text-gray-600"> Email: admin@selfcruz.com</p>
                                <p className="text-gray-600"> Goa, India</p>
                            </div>
                            <p className="text-gray-600 mt-4">
                                Response within 48 hours and resolution within 30 days.
                            </p>
                        </section>

                        <section className="mt-12 pt-8 border-t border-gray-300 text-center">
                            <p className="text-gray-500 text-sm">
                                © 2026 SelfCruz. All rights reserved.
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <Link to="/" className="text-primary hover:underline">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms
