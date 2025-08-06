import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-neutral-800 dark:text-neutral-100">
      <h1 className="font-sans text-4xl">Datenschutzerklärung</h1>

      <section>
        <h2 className="font-sans text-3xl">1. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Die Nutzung unserer Website ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen)
          erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger
          Basis.
        </p>
      </section>

      <section>
        <h2 className="font-sans text-3xl">2. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          <strong>Kat Lentge</strong>
          <br />
          Düstere-Eichen-Weg 6
          <br />
          37073 Göttingen
          <br />
          E-Mail: info@foxxforge.com
        </p>
      </section>

      <section>
        <h2 className="font-sans text-3xl">3. Server-Log-Dateien</h2>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in sogenannten Server-Log-Dateien, die Ihr Browser automatisch
          übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
          Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen.
        </p>
      </section>

      <section>
        <h2 className="font-sans text-3xl">4. Kontaktformular</h2>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
          Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese
          Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs.
          1 lit. a DSGVO), die Sie jederzeit widerrufen können.
        </p>
      </section>

      <section>
        <h2 className="font-sans text-3xl">5. Cookies</h2>
        <p>
          Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten
          auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie
          dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden, Cookies nur im Einzelfall erlauben oder
          generell ausschließen sowie das automatische Löschen der Cookies beim
          Schließen des Browsers aktivieren.
        </p>
      </section>

      <section>
        <h2 className="font-sans text-3xl">6. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten (sofern keine gesetzliche Pflicht besteht)</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
        </ul>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </p>
      </section>

      <section>
        <h2 className="font-sans text-3xl">7. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p>
          Eine Liste der Aufsichtsbehörden finden Sie unter:{" "}
          <a
            href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            bfdi.bund.de
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-sans text-3xl">8. Plugins und Tools</h2>
        <h3 className="font-sans text-2xl">Webhosting</h3>
        <p>
          Unsere Website wird gehostet bei:
          <br />
          <strong>[Name des Hosting-Providers]</strong>
          <br />
          [Adresse oder Link zur Datenschutzerklärung des Hosters]
        </p>
        <p>
          Der Hoster erhebt in unserem Auftrag Daten (siehe Punkt 3), um eine
          sichere und stabile Bereitstellung der Website zu gewährleisten. Es
          wurde ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO
          abgeschlossen.
        </p>
      </section>

      <section>
        <h2 className="font-sans text-3xl">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand:{" "}
          <strong>[August 2025]</strong>
        </p>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu ändern,
          um sie an neue gesetzliche Anforderungen oder Änderungen unserer
          Dienstleistungen anzupassen.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
