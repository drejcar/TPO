package si.fri.tpo.zrna;

import java.util.Date;
import java.util.Properties;

import javax.ejb.Remove;
import javax.ejb.Stateless;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import si.fri.tpo.vmesnikiSB.EmailSBLocal;
import si.fri.tpo.vmesnikiSB.EmailSBRemote;

/**
 * Session Bean implementation class EmailSB
 */
@Stateless
public class EmailSB implements EmailSBRemote, EmailSBLocal {

    /**
     * Default constructor. 
     */
	
	private int port = 465;
	private String host = "smtp.mail.yahoo.com";
	private String from = "modic.robert@yahoo.com";
	private boolean auth = true;
	private String username = "modic.robert@yahoo.com";
	private String password = "mojemocnogeslo";
	private Protocol protocol = Protocol.SMTPS;
	private boolean debug = true;
	
	
    public EmailSB() {
        // TODO Auto-generated constructor stub
    }

	@Override
	public void sendEmail(String to, String subject, String body) {
		
		Properties props = new Properties();
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.port", port);
		
		switch (protocol) {
		    case SMTPS:
		        props.put("mail.smtp.ssl.enable", true);
		        break;
		    case TLS:
		        props.put("mail.smtp.starttls.enable", true);
		        break;
		}
		
		Authenticator authenticator = null;
		
		if (auth) {
		    props.put("mail.smtp.auth", true);
		    authenticator = new Authenticator() {
		        private PasswordAuthentication pa = new PasswordAuthentication(username, password);
		        @Override
		        public PasswordAuthentication getPasswordAuthentication() {
		            return pa;
		        }
		    };
		}
		
		Session session = Session.getInstance(props, authenticator);
		session.setDebug(debug);
		
		MimeMessage message = new MimeMessage(session);
		
		try {
		    message.setFrom(new InternetAddress(from));
		    InternetAddress[] address = {new InternetAddress(to)};
		    message.setRecipients(Message.RecipientType.TO, address);
		    message.setSubject(subject, "UTF-8");
		    message.setSentDate(new Date());
		    message.setText(body, "UTF-8", "html");
		    Transport.send(message);
		} catch (MessagingException ex) {
		    ex.printStackTrace();
		}
	
	}
	
	@Remove
	public void odstraniZrno() {
		
	}

}
