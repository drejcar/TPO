package si.fri.tpo.vmesnikiSB;

import javax.ejb.Local;

@Local
public interface EmailSBLocal {
	public void sendEmail(String to, String subject, String body);
}
