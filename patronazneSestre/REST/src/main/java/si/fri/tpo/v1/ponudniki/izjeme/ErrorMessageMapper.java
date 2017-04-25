package si.fri.tpo.v1.ponudniki.izjeme;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.Provider;

//@Provider
public class ErrorMessageMapper implements ExceptionMapper<Exception>{

	@Override
	public Response toResponse(Exception arg0) {
		
		ErrorMessage errorMessage = new ErrorMessage(arg0.getMessage(), 500);
		return Response.status(Status.INTERNAL_SERVER_ERROR).entity(errorMessage).build();

	}

}
