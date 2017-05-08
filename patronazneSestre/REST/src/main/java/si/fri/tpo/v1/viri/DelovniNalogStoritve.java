package si.fri.tpo.v1.viri;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.*;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.joda.time.*;

import com.sun.mail.iap.Response;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import si.fri.tpo.entitete.DelovniNalog;
import si.fri.tpo.entitete.Obisk;
import si.fri.tpo.vmesnikiSB.FasadniSBLocal;
import si.fri.tpo.vmesniki_ws.DelovniNalogREST;


@RequestScoped
@Path("delovniNalog")
@Produces({ "application/json" })
@Consumes({ MediaType.APPLICATION_JSON, "application/xml" })
@Api(value = "Storitve za delovni nalog")
public class DelovniNalogStoritve implements DelovniNalogREST {

	@EJB
	private FasadniSBLocal fasada;
	
	@POST
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Kreiranje delovnega naloga", notes = "Doda delovni nalog v bazo")
	public void createDelovniNalog(DelovniNalog delovniNalog,
									@QueryParam("fixniDatum") int fixenDatum,	//0 - da | 1 - ne
									@QueryParam("obdobje") int obdobje,			//0 - en obisk | 1 - vec obiskov
									@QueryParam("od") String ood,					//prvi obisk
									@QueryParam("do") String doo,					//zakjucek obdobja obiskov
									@QueryParam("interval") int interval,		//interval obiskov --> razmik med obiski
									@QueryParam("stObiskov") int stObiskov		//stevilo planiranih obiskov
									)		
	{
		
		LocalDate od = LocalDate.parse(ood);
		
		if(obdobje == 0){
			
			Obisk o = new Obisk();
			o.setDatumObiska(od.toDate());
			o.setFixenDatum(fixenDatum);
			delovniNalog.addObisk(o);
		
		}
		else{
			
			if(interval == 0){
				
				//za obdobje
				Obisk o = new Obisk();
				o.setFixenDatum(fixenDatum);
				o.setDatumObiska(od.toDate());
				delovniNalog.addObisk(o);
				
				LocalDate firstDate= od;
				LocalDate lastDate = LocalDate.parse(doo);
				
				int steviloDni = Days.daysBetween(firstDate, lastDate).getDays();
				
				int naDni = steviloDni/stObiskov;
				
				for(int i = 0; i < stObiskov-1; i++){
					Obisk obisk = new Obisk();
					firstDate = firstDate.plusDays(naDni);
					if(firstDate.dayOfWeek().getAsShortText().equals("Sat")){
						firstDate = firstDate.plusDays(2);
					}
					else if(firstDate.dayOfWeek().getAsShortText().equals("Sun")){
						firstDate = firstDate.plusDays(1);
					}
					obisk.setDatumObiska(firstDate.toDate());
					obisk.setFixenDatum(fixenDatum);
					delovniNalog.addObisk(obisk);
				}
				
			}
			else{
				//za interval
				Obisk o = new Obisk();
				o.setFixenDatum(fixenDatum);
				LocalDate firstDate = new LocalDate(od);
				int naDni = interval;
				o.setDatumObiska(od.toDate());
				delovniNalog.addObisk(o);
				for(int i = 0; i < stObiskov-1; i++){
					Obisk obisk = new Obisk();
					firstDate = firstDate.plusDays(naDni);
					if(firstDate.dayOfWeek().getAsShortText().equals("Sat")){
						firstDate = firstDate.plusDays(2);
					}
					else if(firstDate.dayOfWeek().getAsShortText().equals("Sun")){
						firstDate = firstDate.plusDays(1);
					}
					obisk.setDatumObiska(firstDate.toDate());
					obisk.setFixenDatum(fixenDatum);
					delovniNalog.addObisk(obisk);
				}
			}
		}
	
		
		fasada.dodajDelovniNalog(delovniNalog);
		
	}

	@GET
	@Path("/zdravstveniDelavecId/{id}")
	@ApiOperation(value="Vrni delovne naloge zdravstvenega delavca glede na poddano obdobje in število podanih zadetkov",code=200,response=DelovniNalog.class)
	public List<DelovniNalog> returnDelovniNalologsZdravstvenegaDelavca(@PathParam("id") int id, 
																		@QueryParam("od") String ood,
																		@QueryParam("do") String doo, 
																		@QueryParam("start") int start, 
																		@QueryParam("size") int size){
			
		if(ood != null){
			LocalDate oood = LocalDate.parse(ood);
			LocalDate dooo = LocalDate.parse(doo);
			List<DelovniNalog> list = fasada.vrniDelovneNalogeZdrDel(id, oood.toDate(), dooo.toDate(), start, size);
			return list;
		}else{
			return fasada.vrniDelovneNalogeZdrDelAll(id,start,size);
		}
	}
	
	@GET
	@Path("")
	@ApiOperation(value = "Vrni delovne naloge", notes = "Vrne seznam vseh delovnih nalog",code = 200, response = DelovniNalog.class)
	public List<DelovniNalog> returnDelovniNalogs() {
		return fasada.vrniDelovniNalogs();
	}

	@DELETE
	@Path("{id}")
	@ApiOperation(value = "Brisi delovni nalog", notes = "Pobrise specificni delovni nalog iz baze", code = 200)
	public void deleteDelovniNalog(@PathParam("id") int id) {
		fasada.deleteDelovniNalog(id);
		

	}

	@PUT
	@Path("")
	@ApiOperation(value = "Posodobi delovni nalog", notes = "Posodobi ze obstojec delovni nalog", code = 200)
	public void updateDelovniNalog(DelovniNalog delovniNalog) {
		fasada.updateDelovniNalog(delovniNalog);
		

	}

	@GET
	@Path("{id}")
	@ApiOperation(value = "vrni delovni nalog", notes = "Vrne specificni delovni nalog",code = 200, response = DelovniNalog.class)
	public DelovniNalog returnDelovniNalog(@PathParam("id") int id) {
		
		
		return fasada.vrniDelovniNalog(id);
	}

}
