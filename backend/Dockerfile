FROM python:3.12.3
COPY . /app/BackEnd
WORKDIR /app/BackEnd
RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y libhdf5-dev
# Install h5py with no-binary flag
RUN pip install --no-binary h5py h5py
RUN pip install -r requirements.txt
EXPOSE 5400
CMD ["python", "app.py"]
