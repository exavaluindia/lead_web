package PEGA.Lead.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import PEGA.Lead.pojo.LeadData;

@Service("LeadServiceImpl")
@Transactional
public class LeadService implements LeadServiceImpl{

	@Override
	public void storeIntoJsonFile(LeadData data) {
		System.out.println(data.toString());		
	}
}
